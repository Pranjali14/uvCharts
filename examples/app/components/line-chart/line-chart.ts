import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'line-chart',
    styleUrls: ['./line-chart.css'],
    template: `<div id="line-chart-div"></div>`
})

export class LineChartComponent implements OnInit {

    private uv: any;
    private data: any;
    private text: any;
    private metaData: {};

    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.commonService.getRealTimeData('line-chart').subscribe((data) => { this.data = data; this.makeChart(this.data); });
    }

    makeChart(data: {}) {
        this.metaData = {
            graph: {
                orientation: 'Vertical'
            },
            dimension: {
                height: 200,
                width: 400
            },
            label: {
                precision: 100
            },
            meta: {
                position: '#line-chart-div',
                caption: 'Production of Vegetables',
                hlabel: 'Years',
                vlabel: 'Production',
                vsublabel: 'in \'000 tonne'
            },
            axis: {
                showsubticks: false
            }
        };
        if (this.compress) {
            this.metaData = {
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
                label: {
                    precision: 100
                },
                meta: {
                    position: '#line-chart-div',
                },
                axis: {
                    showtext: false
                }
            };
        }

        this.uv.chart('line', data, this.metaData);
        this.commonService.setCachedMetaData('line-chart', this.metaData);
    }
}
