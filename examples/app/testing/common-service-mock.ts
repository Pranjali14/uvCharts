import { CommonService } from "../shared/common.service";
import { Observable } from "rxjs";


export class MockCommonService extends CommonService {
    graphdef: any = {
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

    constructor() {
        super(name);
    }

    getRealTimeData(): Observable<any> {
        return Observable.of(this.graphdef);
    }

    getChartData(): Observable<any> {
        return Observable.of(this.graphdef);
    }

    getTemperature(): Observable<any> {
        return Observable.of(this.graphdef);
    }

    getForestAreaCover(): Observable<any> {
        return Observable.of(this.graphdef);
    }

    getHorticultureProduction(): Observable<any> {
        return Observable.of(this.graphdef);
    }

    getTotalHorticultureProduction(): Observable<any> {
        return Observable.of(this.graphdef);
    }

}