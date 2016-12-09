import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'waterfall-chart',
    template: `<div id="waterfall-div"></div>`
})

export class WaterfallChartComponent implements OnInit {
    private uv: any;
    private metaData: {};

    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {

        this.commonService.getData("waterfall-chart").subscribe((data) => { this.makeChart(data); });
    }

    makeChart(data: {}) {
        this.metaData = {
            meta: {
                position: '#waterfall-div'
            },
            graph: {
                orientation: 'Vertical'
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
                graph: {
                    orientation: 'Vertical'
                },
                dimension: {
                    height: 200,
                    width: 200
                },
                meta: {
                    position: '#waterfall-div',
                },
                axis: {
                    showtext: false
                }
            };
        }

        this.uv.chart('Waterfall', data, this.metaData);
        this.commonService.setCachedMetaData('waterfall-chart', this.metaData);
    }
}
