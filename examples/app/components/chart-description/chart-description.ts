import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'chart-description',
    template: `<div>{{description}}</div>`
})

export class ChartDescriptionComponent implements OnInit {

    description: string;

    constructor(private route: ActivatedRoute,
        private commonService: CommonService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.description = this.commonService.getChartDescription(params['chartType']);
        });

    }
}
