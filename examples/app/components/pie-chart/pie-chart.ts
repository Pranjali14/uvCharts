import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'pie-chart',
    styleUrls: ['./pie-chart.css'],
    template: `<div id="pie-chart-div"></div>`
})

export class PieChartComponent implements OnInit {

    private uv: any;
    private data: any;
    private metaData: {};

    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.commonService.getHorticultureProduction('pie-chart').subscribe((data) => { this.data = data; this.makeChart(this.data); });
    }

    makeChart(data: {}) {
        this.metaData = {
            meta: {
                position: '#pie-chart-div',
                caption: 'Horticulture Production in India during 2010-11',
            },
            dimension: {
                height: 300,
                width: 300
            }
        };
        if (this.compress) {
            this.metaData = {
                meta: {
                    position: '#pie-chart-div'
                },
                margin: {
                    left: 10,
                    right: 10,
                    bottom: 10
                },
                dimension: {
                    height: 200,
                    width: 200
                },
                axis: {
                    showtext: false
                }
            };
        }
        this.uv.chart('pie', data, this.metaData);
        this.commonService.setCachedMetaData('pie-chart', this.metaData);
    }
}
