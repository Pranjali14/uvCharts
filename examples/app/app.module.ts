import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { DashboardModule } from './components/dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from "./app.routes.module";

import { AppComponent } from "./app";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpModule,
        DashboardModule,
        AppRoutingModule,
        CoreModule.forRoot()
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
