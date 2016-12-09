import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { ChartDetailsWrapper } from './chart-details-wrapper';
import { ChartCodeComponent } from '../chart-code/chart-code';
import { ChartDescriptionComponent } from '../chart-description/chart-description';
import { ChartEditorComponent } from '../chart-editor/chart-editor';
import ChartDetailsComponent from './chart-details';

const routes: Routes = [
    { path: ':chartType', component: ChartDetailsWrapper }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ChartEditorComponent,
        ChartDetailsWrapper,
        ChartDetailsComponent,
        ChartCodeComponent,
        ChartDescriptionComponent
    ]
})
export default class ChartDetailsModule { }
