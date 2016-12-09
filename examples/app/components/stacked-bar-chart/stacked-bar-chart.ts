import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'stacked-bar-chart',
    styleUrls: ['./stacked-bar-chart.css'],
    template: `<div id="stacked-bar-div"></div>`
})

export class StackedBarChartComponent implements OnInit {
    private uv: any;
    private data: any;
    private metaData: {};

    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.commonService.getForestAreaCover('stacked-bar-chart').subscribe((data) => { this.data = data; this.makeChart(this.data); });
    }

    makeChart(data: {}) {
        this.metaData = {
            meta: {
                position: '#stacked-bar-div',
                caption: 'Forest Cover',
                hlabel: 'Area',
                hsublabel: 'in \'00 kms'
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
                    position: '#stacked-bar-div',
                },
                axis: {
                    showtext: false
                }
            };
        }

        this.uv.chart('StackedBar', data, this.metaData);
        this.commonService.setCachedMetaData('stacked-bar-chart', this.metaData);
    }
}
