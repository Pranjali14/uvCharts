import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'stepup-bar-chart',
    template: `<div id="stepup-bar-div"></div>`
})

export class StepupBarChartComponent implements OnInit {
    private uv: any;
    private data: any;
    private metaData: {};

    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.commonService.getForestAreaCover('stepup-bar-chart').subscribe((data) => { this.data = data; this.makeChart(this.data); });
    }

    makeChart(data: {}) {
        this.metaData = {
            meta: {
                position: '#stepup-bar-div'
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
                    position: '#stepup-bar-div',
                },
                axis: {
                    showtext: false
                }
            };
        }

        this.uv.chart('StepUpBar', data, this.metaData);
        this.commonService.setCachedMetaData('stepup-bar-chart', this.metaData);
    }
}
