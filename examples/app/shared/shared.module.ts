import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { uvComponents } from './components-list';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        uvComponents,
        FormsModule,
        CommonModule
    ],
    declarations: [
        uvComponents
    ]
})
export class SharedModule { }
