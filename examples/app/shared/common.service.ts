import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {
    public uv: any;
    private url = 'https://data.gov.in/api/datastore/resource.json?resource_id=0bc5ead8-b329-4577-8bf2-4c0c40c4b877&api-key=13abddd93f0ecebd6eab10dd65088766';
    private cachedGraphData: Object = {};

    constructor(private http: Http) {
        let windowObj: any = window;
        this.uv = windowObj.uv;
    }


    getChartData(chartType) {
        switch (chartType) {
            case 'percent-area-chart':
            case 'percent-bar-chart':
            case 'stacked-area-chart':
                return this.getTotalHorticultureProduction(chartType);
            case 'area-chart':
            case 'line-chart':
                return this.getRealTimeData(chartType);
            case 'bar-chart':
                return this.getTemperature(chartType);
            case 'stacked-bar-chart':
            case 'stepup-bar-chart':
                return this.getForestAreaCover(chartType);
            case 'donut-chart':
            case 'pie-chart':
            case 'polar-area-chart':
                return this.getHorticultureProduction(chartType);
            case 'waterfall-chart':
                return this.getData(chartType);
        }
    }

    getRealTimeData(chartType): Observable<any> {
        return this.http.get(this.url)
            .map(res => this.extractData(res, this, chartType));
    }

    getTemperature(chartType) {
        let url = "https://data.gov.in/api/datastore/resource.json?resource_id=863d77b2-a35c-44c4-aaaf-8b3a19fc8e0e&api-key=13abddd93f0ecebd6eab10dd65088766&filters[YEAR]=2005,2006,2007,2009,2008,2010,2011,2012,2013,2014&fields=ANNUALMIN,ANNUALMAX,YEAR&sort[YEAR]=asc";
        return this.http.get(url)
            .map(res => this.extractDataCommon(res, this, chartType));

    }

    getForestAreaCover(chartType) {
        let url = "https://data.gov.in/api/datastore/resource.json?resource_id=b91dca24-12df-420e-816d-656464e5f3e8&api-key=13abddd93f0ecebd6eab10dd65088766&filters[stateut]=Rajasthan,Maharashtra,Uttar%20Pradesh,Jammu%20and%20Kashmir,Gujarat,Karnataka&fields=stateut,2011_assessment_open_forest,2011_assessment_mod__dense_forest,2011_assessment_very_dense_forest,geographical_area&sort[geographical_area]=desc";
        return this.http.get(url).map(res => this.extractForestCoverData(res, this, chartType));
    }

    getHorticultureProduction(chartType) {
        let url = "https://data.gov.in/api/datastore/resource.json?resource_id=0bc5ead8-b329-4577-8bf2-4c0c40c4b877&api-key=13abddd93f0ecebd6eab10dd65088766&filters[year]=2010-11&fields=fruits_production_in_000_tonne,vegetables_production_in_000_tonne,flowers_production_in_000_tonne,aroma__medi__production_in_000_tonne,plantation_crops_production_in_000_tonne,spices_production_in_000_tonne,mushroom_production_in_000_tonne,grand_total_production_in_000_tonne";
        return this.http.get(url).map(res => this.extractHorticultureData(res, this, chartType));
    }

    getTotalHorticultureProduction(chartType) {
        let url = "https://data.gov.in/api/datastore/resource.json?resource_id=0bc5ead8-b329-4577-8bf2-4c0c40c4b877&api-key=13abddd93f0ecebd6eab10dd65088766&fields=vegetables_production_in_000_tonne,fruits_production_in_000_tonne,spices_production_in_000_tonne,plantation_crops_production_in_000_tonne,grand_total_production_in_000_tonne,year&sort[year]=asc";
        return this.http.get(url).map(res => this.extractTotalHorticultureData(res, this, chartType));
    }

    private extractTotalHorticultureData(res: Response, thizz, chartType) {
        let data = res.json().records;
        let categories = ['Vegetables', 'Fruits', 'Spices', 'Plantation Crops'];
        let dataset = { 'Vegetables': [], 'Fruits': [], 'Spices': [], 'Plantation Crops': [] };
        let dataObj = {};
        for (let obj of data) {
            dataset['Vegetables'].push({
                name: obj.year,
                value: Math.round(obj['vegetables_production_in_000_tonne'] / obj['grand_total_production_in_000_tonne'] * 100)
            });
            dataset['Fruits'].push({
                name: obj.year,
                value: Math.round(obj['fruits_production_in_000_tonne'] / obj['grand_total_production_in_000_tonne'] * 100)
            });
            dataset['Spices'].push({
                name: obj.year,
                value: Math.round(obj['spices_production_in_000_tonne'] / obj['grand_total_production_in_000_tonne'] * 100)
            });
            dataset['Plantation Crops'].push({
                name: obj.year,
                value: Math.round(obj['plantation_crops_production_in_000_tonne'] / obj['grand_total_production_in_000_tonne'] * 100)
            });
        }
        dataObj['categories'] = categories;
        dataObj['dataset'] = dataset;
        thizz.setCachedData(dataObj, chartType);
        return dataObj || {};
    }

    private extractHorticultureData(res: Response, thizz, chartType) {
        let data = res.json().records;
        let categories = ['Horticulture'];
        let dataset = { 'Horticulture': [] };
        let dataObj = {};
        for (let key in data[0]) {
            if (key !== 'grand_total_production_in_000_tonne') {
                dataset['Horticulture'].push({
                    name: key.split('_')[0],
                    value: Math.round(data[0][key] / data[0]['grand_total_production_in_000_tonne'] * 100)
                });
            }
        }
        dataObj['categories'] = categories;
        dataObj['dataset'] = dataset;
        thizz.setCachedData(dataObj, chartType);
        return dataObj || {};
    }

    private extractForestCoverData(res: Response, thizz, chartType) {
        let data = res.json().records;
        let categories = ['Very Dense', 'Moderate Dense', 'Open'];
        let dataset = { 'Very Dense': [], 'Moderate Dense': [], 'Open': [] };
        let dataObj = {};
        for (let obj of data) {
            dataset['Very Dense'].push({
                name: obj.stateut,
                value: Math.round(obj['2011_assessment_very_dense_forest'] / 100)
            });
            dataset['Moderate Dense'].push({
                name: obj.stateut,
                value: Math.round(obj['2011_assessment_mod__dense_forest'] / 100)
            });
            dataset['Open'].push({ name: obj.stateut, value: Math.round(obj['2011_assessment_open_forest'] / 100) });
        }
        dataObj['categories'] = categories;
        dataObj['dataset'] = dataset;
        thizz.setCachedData(dataObj, chartType);
        return dataObj || {};
    }

    private extractDataCommon(res: Response, thizz, chartType) {
        let data = res.json().records;
        let categories = ['ANNUALMIN', 'ANNUALMAX'];
        let dataset = { 'ANNUALMIN': [], 'ANNUALMAX': [] };
        let dataObj = {};
        for (let obj of data) {
            dataset.ANNUALMIN.push({ name: obj.YEAR, value: Number(obj.ANNUALMIN) });
            dataset.ANNUALMAX.push({ name: obj.YEAR, value: Number(obj.ANNUALMAX) });
        }
        dataObj['categories'] = categories;
        dataObj['dataset'] = dataset;
        thizz.setCachedData(dataObj, chartType);
        return dataObj || {};

    }

    getData(chartType) {
        let graphdef = {
            categories: ['uvCharts', 'Matisse', 'SocialByWay'],
            dataset: {
                'uvCharts': [
                    { name: '2008', value: 15 },
                    { name: '2009', value: 28 },
                    { name: '2010', value: 42 },
                    { name: '2011', value: 88 },
                    { name: '2012', value: 100 },
                    { name: '2013', value: 143 }
                ],
                'Matisse': [
                    { name: '2008', value: 151 },
                    { name: '2009', value: 286 },
                    { name: '2010', value: 4 },
                    { name: '2011', value: 748 },
                    { name: '2012', value: 1000 },
                    { name: '2013', value: 13 }
                ],
                'SocialByWay': [
                    { name: '2008', value: 153 },
                    { name: '2009', value: 248 },
                    { name: '2010', value: 402 },
                    { name: '2011', value: 889 },
                    { name: '2012', value: 1200 },
                    { name: '2013', value: 13 }
                ]
            }
        };

        this.setCachedData(graphdef, chartType);
        return new Observable(observer => { observer.next(graphdef); observer.complete(); });
    }

    private extractDetails(res: Response | any) {
        return res._body;
    }

    private extractData(res: Response, thizz, chartType) {
        let data = res.json();
        let categories = ['vegetables'];
        let dataset = { 'vegetables': [] };
        let dataObj = {};
        for (let obj of data.records) {
            dataset.vegetables.push({ name: obj.year, value: Math.round(obj.vegetables_production_in_000_tonne / 1000) });
        }
        dataObj['categories'] = categories;
        dataObj['dataset'] = dataset;

        thizz.setCachedData(dataObj, chartType);
        return dataObj || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


    getChartDescription(chartType) {

        switch (chartType) {
            case 'area-chart':
                return 'An area chart or area graph displays graphically quantitative data. It is based on the line chart. ' +
                    'The area between axis and line are commonly emphasized with colors, textures and hatchings. ' +
                    'Commonly one compares with an area chart two or more quantities.';
            case 'stacked-area-chart':
                return 'Stacked area chart displays part-to-whole relations by showing the constituent parts of a whole one over the other. ' +
                    'Stacked Area Charts are Multi-Series Area Charts plotted together with aligned x values, such that at any point it shows cumulative total of that point for all series.';
            case 'line-chart':
                return 'Line graphs are used to track changes over short and long periods of time. When smaller changes exist, ' +
                    'line graphs are better to use than bar graphs. Line graphs can also be used to compare changes over the same period of time for more than one group.';
            case 'bar-chart':
                return 'Bar graphs are used to compare things between different groups or to track changes over time. ' +
                    'However, when trying to measure change over time, bar graphs are best when the changes are larger.';
            case 'stacked-bar-chart':
                return 'Stacked Bar Charts are plotted when multiple Bar Charts with aligned x values are plotted on same axis. ' +
                    'Multiple sets of data are represented by one Bar. Contribution of each value is displayed in different colors ' +
                    'and the total length of bar is Cumulative Sum of all the data Elements. Each dataSeries should contain type as stackedBar.';
            case 'pie-chart':
                return 'A pie chart is a circular chart divided into sectors, each sector (and consequently its central angle and area), ' +
                    'is proportional to the quantity it represents. Together, the sectors create a full disk.';
            case 'donut-chart':
                return 'A doughnut Chart is a circular chart with a blank center. Chart is divided into sectors, each sector (and consequently its central angle and area), ' +
                    'is proportional to the quantity it represents. Together, the sectors create a full disk.';
            case 'waterfall-chart':
                return 'A waterfall chart is a form of data visualization that helps in understanding the cumulative effect of sequentially introduced positive or negative values. ' +
                    'The waterfall chart is also known as a flying bricks chart or Mario chart due to the apparent suspension of columns (bricks) in mid-air. ' +
                    'Often in finance, it will be referred to as a bridge.';
            case 'stepup-bar-chart':
                return 'Step charts show changes that happen occasionally.  For instance, the US Prime Rate that is based off of the Fed Funds Target Rate, but it doesn’t change that often.  ' +
                    'It has only changed 43 times since the Year 2000, where a normal line chart might change quarterly, monthly or even daily.';
            case 'polar-area-chart':
                return 'The polar area chart is similar to a usual pie chart, except sectors are equal angles and differ rather in how far each sector extends from the center of the circle. ' +
                    'The polar area chart is used to plot cyclic phenomena (e.g., count of deaths by month). ' +
                    'For example, if the count of deaths in each month for a year are to be plotted then there will be 12 sectors (one per month) all with the same angle of 30 degrees each. ' +
                    'The radius of each sector would be proportional to the square root of the death count for the month, so the area of a sector represents the number of deaths in a month. ' +
                    'If the death count in each month is subdivided by cause of death, it is possible to make multiple comparisons on one diagram, as is seen in the polar area diagram famously developed by Florence Nightingale.';
            case 'percent-bar-chart':
                return 'Sub-divided bar chart may be drawn on percentage basis. ' +
                    'To draw sub-divided bar chart on percentage basis, we express each component as the percentage of its respective total. ' +
                    'In drawing percentage bar chart, bars of length equal to 100 for each class are drawn at first step and sub-divided in the ' +
                    'proportion of the percentage of their component in the second step. The diagram so obtained is called percentage bar chart. ' +
                    'This type of chart is useful to make comparison in components holding the difference of total constant.';
            case 'percent-area-chart':
                return 'Sub-divided area chart may be drawn on percentage basis. ' +
                    'To draw sub-divided area chart on percentage basis, we express each component as the percentage of its respective total. ';
        }
        return 'Description for: ' + chartType;
    }

    getChartTypeName(chartType) {
        switch (chartType) {
            case 'area-chart':
                return 'Area Chart';
            case 'line-chart':
                return 'Line Chart';
            case 'stacked-area-chart':
                return 'Stacked Area Chart';
            case 'stacked-bar-chart':
                return 'Stacked Bar Chart';
            case 'pie-chart':
                return 'Pie Chart';
            case 'donut-chart':
                return 'Donut Chart';
            case 'percent-area-chart':
                return 'Percent Area Chart';
            case 'percent-bar-chart':
                return 'Percent Bar Chart';
            case 'stepup-bar-chart':
                return 'Step Up Bar Chart';
            case 'polar-area-chart':
                return 'Polar Area Chart';
            case 'waterfall-chart':
                return 'Waterfall Chart';
            case 'bar-chart':
                return 'Bar Chart';

        }

    }


    private setCachedData(data, chartType) {
        this.cachedGraphData[chartType] = {};
        this.cachedGraphData[chartType].data = data;
    }

    getCachedData(chartType) {
        return this.cachedGraphData &&
            this.cachedGraphData[chartType] &&
            this.cachedGraphData[chartType].data;

    }

    updatePalette(chartType, data) {
        if (this.cachedGraphData[chartType].metaData['graph'])
            this.cachedGraphData[chartType].metaData['graph']['palette'] = data;
        else {
            this.cachedGraphData[chartType].metaData['graph'] = {};
            this.cachedGraphData[chartType].metaData['graph']['palette'] = data;
        }
    }

    setCachedMetaData(chartType, data) {
        this.cachedGraphData[chartType].metaData = data;
    }

    getCachedMetaData(chartType) {
        return this.cachedGraphData &&
            this.cachedGraphData[chartType] &&
            this.cachedGraphData[chartType].metaData;
    }

    getChartKey(chartType) {
        let dataList = {
            'line-chart': {
                key: 'line',
                domRef: 'line-chart',
                name: 'Line Chart'
            },
            'area-chart': {
                key: 'area',
                domRef: 'area-chart',
                name: 'Area Chart'
            },
            'bar-chart': {
                key: 'Bar',
                domRef: 'bar-chart',
                name: 'Bar Chart'
            },
            'pie-chart': {
                key: 'pie',
                domRef: 'pie-chart',
                name: 'Pie Chart'
            },
            'percent-area-chart': {
                key: 'percentarea',
                domRef: 'percent-area-chart',
                name: 'Percent Area Chart'
            },
            'donut-chart': {
                key: 'Donut',
                domRef: 'donut-chart',
                name: 'Donut Chart'
            },
            'polar-area-chart': {
                key: 'PolarArea',
                domRef: 'polar-area-chart',
                name: 'Polar Area Chart'
            },
            'stepup-bar-chart': {
                key: 'StepUpBar',
                domRef: 'stepup-bar-chart',
                name: 'StepUp Bar Chart'
            },
            'waterfall-chart': {
                key: 'Waterfall',
                domRef: 'waterfall-chart',
                name: 'Waterfall Chart'
            },
            'stacked-bar-chart': {
                key: 'stackedBar',
                domRef: 'stacked-bar-chart',
                name: 'Stacked Bar Chart'
            },
            'stacked-area-chart': {
                key: 'StackedArea',
                domRef: 'stacked-area-chart',
                name: 'Stacked Area Chart'
            },
            'percent-bar-chart': {
                key: 'percentbar',
                domRef: 'percent-bar-chart',
                name: 'Percent Bar Chart'
            }
        };

        return dataList[chartType].key;


    }
}