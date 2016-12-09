import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'polar-area-chart',
    template: `<div id="polar-area-div"></div>`
})

export class PolarAreaChartComponent implements OnInit {
    private uv: any;
    private data: any;
    private metaData: {};

    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.commonService.getHorticultureProduction('polar-area-chart').subscribe((data) => { this.data = data; this.makeChart(this.data); });
    }

    makeChart(data: {}) {
        this.metaData = {
            meta: {
                position: '#polar-area-div',
                caption: 'Horticulture Production in India during 2010-11'
            },
            dimension: {
                height: 300,
                width: 300
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
                    position: '#polar-area-div',
                },
                axis: {
                    showtext: false
                }
            };
        }

        this.uv.chart('PolarArea', this.data, this.metaData);
        this.commonService.setCachedMetaData('polar-area-chart', this.metaData);
    }
}
