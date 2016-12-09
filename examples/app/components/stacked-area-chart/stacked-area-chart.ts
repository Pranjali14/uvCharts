import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'stacked-area-chart',
    styleUrls: ['./stacked-area-chart.css'],
    template: `<div id="stacked-area-div"></div>`,
})

export class StackedAreaChartComponent implements OnInit {

    private uv: any;
    private data: any;
    private metaData: {};

    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.commonService.getTotalHorticultureProduction('stacked-area-chart').subscribe((data) => { this.data = data; this.makeChart(this.data); });
    }

    makeChart(data: {}) {
        this.metaData = {
            meta: {
                position: '#stacked-area-div',
                caption: "Production in India during 2001-11"
            },
            graph: {
                orientation: 'Vertical'
            },
            dimension: {
                height: 300,
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
                    position: '#stacked-area-div',
                },
                axis: {
                    showtext: false
                }
            };
        }

        this.uv.chart('StackedArea', data, this.metaData);
        this.commonService.setCachedMetaData('stacked-area-chart', this.metaData);
    }
}
