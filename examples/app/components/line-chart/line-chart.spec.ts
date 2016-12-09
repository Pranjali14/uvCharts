import { inject, async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LineChartComponent } from './line-chart';
import { CommonService } from '../../shared/common.service';
import { MockCommonService } from "../../testing/common-service-mock";

let comp: LineChartComponent;
let fixture: ComponentFixture<LineChartComponent>;
let de: DebugElement;
let el: HTMLElement;
let commonService, spy;
let windowMock: Window = <any>{
    uv: {
        chart: function() {
            return 'line-chart called';
        }
    }
};
let window;

describe('line chart component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LineChartComponent],
            providers: [
                { provide: CommonService, useClass: MockCommonService },
                { provide: Window, useValue: windowMock }
            ]
        });
        fixture = TestBed.createComponent(LineChartComponent);
        comp = fixture.componentInstance;

        // commonService actually injected into the component
        commonService = fixture.debugElement.injector.get(CommonService);
        window = fixture.debugElement.injector.get(Window);

        de = fixture.debugElement.query(By.css('#line-chart-div'));
        el = de.nativeElement;
    });


    it('should verify that the component is blank before ngOnInit fires', () => {
        expect(el.textContent).toBeFalsy();
    });

    it('should verify that the component contains the graph after ngOnInit', () => {
        // console.log('Window.uv.chart: ' + window.uv.chart);
        // fixture.detectChanges();
        // let svg = fixture.debugElement.query(By.css('svg'));
        // expect(svg).toBeDefined();
    });

});
