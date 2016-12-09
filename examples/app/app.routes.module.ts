import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'chart', loadChildren: () => new Promise(function(resolve) {
            (require as any).ensure([], function(require: any) {
                resolve(require('./components/chart-details/chart-details.module')['default']);
            });
        })
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
