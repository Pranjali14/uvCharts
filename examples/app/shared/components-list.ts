import { LineChartComponent } from '../components/line-chart/line-chart';
import { AreaChartComponent } from '../components/area-chart/area-chart';
import { StackedBarChartComponent } from '../components/stacked-bar-chart/stacked-bar-chart';
import { PercentBarChartComponent } from '../components/percent-bar-chart/percent-bar-chart';
import { PercentAreaChartComponent } from '../components/percent-area-chart/percent-area-chart';
import { PieChartComponent } from '../components/pie-chart/pie-chart';
import { DonutChartComponent } from '../components/donut-chart/donut-chart';
import { WaterfallChartComponent } from '../components/waterfall-chart/waterfall-chart';
import { PolarAreaChartComponent } from '../components/polar-area-chart/polar-area-chart';
import { StepupBarChartComponent } from '../components/stepup-bar-chart/stepup-bar-chart';
import { BarChartComponent } from '../components/bar-chart/bar-chart';
import { StackedAreaChartComponent } from '../components/stacked-area-chart/stacked-area-chart';

export const uvComponents = [
    LineChartComponent,
    AreaChartComponent,
    StackedBarChartComponent,
    PercentBarChartComponent,
    PercentAreaChartComponent,
    PieChartComponent,
    DonutChartComponent,
    WaterfallChartComponent,
    PolarAreaChartComponent,
    StepupBarChartComponent,
    BarChartComponent,
    StackedAreaChartComponent
];

export class EntryComponents {
    constructor() { }

    getComponentForChartType(type: string) {
        let cmp;
        if (type === 'line-chart') {
            cmp = LineChartComponent;
        } else if (type === 'stacked-bar-chart') {
            cmp = StackedBarChartComponent;
        } else if (type === 'area-chart') {
            cmp = AreaChartComponent;
        } else if (type === 'percent-bar-chart') {
            cmp = PercentBarChartComponent;
        } else if (type === 'percent-area-chart') {
            cmp = PercentAreaChartComponent;
        } else if (type === 'pie-chart') {
            cmp = PieChartComponent;
        } else if (type === 'donut-chart') {
            cmp = DonutChartComponent;
        } else if (type === 'waterfall-chart') {
            cmp = WaterfallChartComponent;
        } else if (type === 'polar-area-chart') {
            cmp = PolarAreaChartComponent;
        } else if (type === 'stepup-bar-chart') {
            cmp = StepupBarChartComponent;
        } else if (type === 'bar-chart') {
            cmp = BarChartComponent;
        } else if (type === 'stacked-area-chart') {
            cmp = StackedAreaChartComponent;
        }
        return cmp;
    }
}
