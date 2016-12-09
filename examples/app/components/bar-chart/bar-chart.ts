import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'bar-chart',
    template: `<div id="bar-div"></div>`
})

export class BarChartComponent implements OnInit {
    private uv: any;
    private data: any;
    private metaData: {};

    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.commonService.getTemperature('bar-chart').subscribe((data) => { this.data = data; this.makeChart(this.data); });
    }

    makeChart(data: {}) {
        this.metaData = {
            graph: {
                orientation: 'Vertical',
                caption: 'Average min and max temperature in India from 2005-14'
            },
            meta: {
                position: '#bar-div'
            },
            dimension: {
                height: 200,
                width: 400
            },
        };
        if (this.compress) {
            this.metaData = {
                graph: {
                    orientation: 'Vertical'
                },
                bar: {
                    fontsize: 0
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
                meta: {
                    position: '#bar-div',
                },
                axis: {
                    showtext: false
                }
            };
        };

        this.uv.chart('Bar', this.data, this.metaData);
        this.commonService.setCachedMetaData('bar-chart', this.metaData);
    }
}
