import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../../shared/common.service";

@Component({
    selector: 'chart-editor',
    templateUrl: 'chart-editor.html',
    styleUrls: ['chart-editor.css']
})

export class ChartEditorComponent implements OnInit {

    public graphData: {};
    public datasetKeys: any = [];
    private uv: any;
    private chartType: string;

    palette = ['Default', 'Plain', 'Android', 'Soft', 'Simple', 'Egypt', 'Olive', 'Candid', 'Sulphide', 'Lint'];

    constructor(private route: ActivatedRoute,
        private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {

            // todo implement using cached data
            this.chartType = params['chartType'];
            let func = this.commonService.getChartData(this.chartType);
            func.subscribe((data) => {
                this.graphData = data;
                this.datasetKeys = Object.keys(this.graphData["dataset"]);
            });
        });
    }

    onValueChange(event) {
        let chartDiv = document.getElementsByClassName('uv-chart-div');
        let parent = chartDiv && chartDiv[0].parentNode;
        parent.removeChild(chartDiv[0]);

        this.uv.chart(this.commonService.getChartKey(this.chartType), this.graphData, this.commonService.getCachedMetaData(this.chartType));
    }

    resetAction(event) {
        let chartDiv = document.getElementsByClassName('uv-chart-div');
        let parent = chartDiv && chartDiv[0].parentNode;
        parent.removeChild(chartDiv[0]);

        this.graphData = this.commonService.getCachedData(this.chartType);
        this.uv.chart(this.commonService.getChartKey(this.chartType), this.graphData, this.commonService.getCachedMetaData(this.chartType));
    }

    setColorPalette(color) {
        let chartDiv = document.getElementsByClassName('uv-chart-div');
        let parent = chartDiv && chartDiv[0].parentNode;
        parent.removeChild(chartDiv[0]);
        this.commonService.updatePalette(this.chartType, color);
        this.uv.chart(this.commonService.getChartKey(this.chartType), this.graphData, this.commonService.getCachedMetaData(this.chartType));
    }
}