import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from "../../shared/common.service";
import { EntryComponents } from '../../shared/components-list';

@Component({
    selector: 'chart-details-wrapper',
    styleUrls: ['./chart-details-wrapper.css'],
    template: `<div class="wrapper container">
                    <div class="back-btn">
                        <span class="glyphicon glyphicon-backward" aria-hidden="true"></span>
                        <a [routerLink]="'/dashboard'">Back</a>
                    </div>
                <h2>{{chartType}}</h2>
                <div>
                  <chart-description></chart-description>
                  <chart-details [componentData]="componentData"></chart-details>
                  <chart-editor></chart-editor>
                </div>
                <chart-code></chart-code>
              </div>
              `

})
export class ChartDetailsWrapper implements OnInit {
    componentData: Object = null;
    chartType: string;
    entryComponents: EntryComponents = new EntryComponents();

    constructor(private router: Router,
        private route: ActivatedRoute,
        private commonService: CommonService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params['chartType']) {
                this.createChartComponent(params['chartType']);
                this.chartType = this.commonService.getChartTypeName(params['chartType']);
            }
        });
    }

    createChartComponent(chartType) {
        let component = this.entryComponents.getComponentForChartType(chartType);
        this.componentData = {
            component: component
        };
    }
}
