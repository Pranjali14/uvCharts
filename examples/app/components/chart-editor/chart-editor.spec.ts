import { inject, async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonService } from '../../shared/common.service';
import { Observable } from 'rxjs/Observable';
import { ChartEditorComponent } from "./chart-editor";
import { ActivatedRoute } from "@angular/router";
import { ActivatedRouteStub } from "../../testing/router-stubs";
import { FormsModule } from "@angular/forms";

let comp: ChartEditorComponent;
let fixture: ComponentFixture<ChartEditorComponent>;
let de: DebugElement;
let el: HTMLElement;
let commonService, spy, activatedRoute;

let commonServiceStub = {
    chartData: {
        'bar-chart': 'This is a bar chart',
        'line-chart': 'This is a line chart'
    }
};

describe('chart editor component test suite', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [ChartEditorComponent],
            providers: [
                { provide: CommonService, useValue: commonServiceStub },
                { provide: ActivatedRoute, useClass: ActivatedRouteStub }
            ]
        });
        fixture = TestBed.createComponent(ChartEditorComponent);
        comp = fixture.componentInstance;

        // commonService actually injected into the component
        commonService = fixture.debugElement.injector.get(CommonService);
        activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);

    });

    it('stub object and injected commonService should not be the same', () => {
        expect(commonServiceStub === commonService).toBe(false);
    });

    it('should check that the route params contain the correct chartType', () => {
        activatedRoute.testParams = { chartType: 'bar-chart' };
        expect(commonService.chartData[activatedRoute.testParams.chartType]).toBe('This is a bar chart');
    });

});
