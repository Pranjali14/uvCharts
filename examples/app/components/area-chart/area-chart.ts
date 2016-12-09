import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'area-chart',
    styleUrls: ['./area-chart.css'],
    template: `<div id="area-div"></div>`
})

export class AreaChartComponent implements OnInit {
    private uv: any;

    private data: any;
    private metaData: {};
    @Input() compress: boolean;

    constructor(private commonService: CommonService) {
        this.uv = commonService.uv;
    }

    ngOnInit() {
        this.commonService.getRealTimeData('area-chart').subscribe((data) => { this.data = data; this.makeChart(this.data); });
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
            meta: {
                position: '#area-div',
                caption: 'Production of Vegetables',
                hlabel: 'Years',
                vlabel: 'Production',
                vsublabel: 'in tonnes'
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
                meta: {
                    position: '#area-div'
                },
                axis: {
                    showtext: false
                }
            };
        }

        this.uv.chart('area', data, this.metaData);
        this.commonService.setCachedMetaData('area-chart', this.metaData);
    }
}
