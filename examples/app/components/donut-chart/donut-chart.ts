import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'donut-chart',
    template: `<div id="donut-div"></div>`
})

export class DonutChartComponent implements OnInit {
    private uv: any;
    private data: any;
    private metaData: {};

    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.commonService.getHorticultureProduction('donut-chart').subscribe((data) => { this.data = data; this.makeChart(this.data); });
    }

    makeChart(data: {}) {
        this.metaData = {
            meta: {
                position: '#donut-div',
                caption: 'Horticulture Production in India during 2010-11'
            },
            dimension: {
                height: 200,
                width: 400
            }
        };
        if (this.compress) {
            this.metaData = {
                margin: {
                    left: 10,
                    right: 10,
                    bottom: 10
                },
                dimension: {
                    height: 200,
                    width: 200
                },
                meta: {
                    position: '#donut-div',
                },
                axis: {
                    showtext: false
                }
            };
        }

        this.uv.chart('Donut', data, this.metaData);
        this.commonService.setCachedMetaData('donut-chart', this.metaData);
    }
}
