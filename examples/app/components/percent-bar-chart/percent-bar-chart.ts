import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'percent-bar-chart',
    styleUrls: ['./percent-bar-chart.css'],
    template: `<div id="percent-bar-div"></div>`
})

export class PercentBarChartComponent implements OnInit {

    private uv: any;
    private data: any;
    private metaData: {};

    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.commonService.getTotalHorticultureProduction('percent-bar-chart').subscribe((data) => { this.data = data; this.makeChart(this.data); });
    }

    makeChart(data: {}) {
        this.metaData = {
            meta: {
                position: '#percent-bar-div',
                caption: 'Production in India'
            },
            graph: {
                orientation: 'Vertical'
            },
            dimension: {
                height: 300,
                width: 500
            }
        };
        if (this.compress) {
            this.metaData = {
                meta: {
                    position: '#percent-bar-div'
                },
                graph: {
                    orientation: 'Vertical'
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
        this.uv.chart('percentbar', this.data, this.metaData);
        this.commonService.setCachedMetaData('percent-bar-chart', this.metaData);
    }
}
