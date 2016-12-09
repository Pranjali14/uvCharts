import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'percent-area-chart',
    styleUrls: ['./percent-area-chart.css'],
    template: `<div id="percent-area-div"></div>`
})

export class PercentAreaChartComponent implements OnInit {

    private uv: any;
    private data: any;
    private metaData: {};

    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.commonService.getTotalHorticultureProduction('percent-area-chart').subscribe((data) => { this.data = data; this.makeChart(this.data); });
    }

    makeChart(data: {}) {
        this.metaData = {
            meta: {
                position: '#percent-area-div',
                caption: "Production in India during 2001-11"
            },
            graph: {
                orientation: 'Vertical'
            },
            dimension: {
                height: 200,
                width: 400
            },
            axis: {
                opacity: 0
            }
        };
        if (this.compress) {
            this.metaData = {
                meta: {
                    position: '#percent-area-div',
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
        this.uv.chart('percentarea', data, this.metaData);
        this.commonService.setCachedMetaData('percent-area-chart', this.metaData);
    }
}
