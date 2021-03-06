import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: '', loadChildren: 'app/home/home.module#HomeModule'}
];

@NgModule({
              imports: [
                  RouterModule.forRoot(
                      appRoutes, {useHash: true}
                  )
              ],
              exports: [
                  RouterModule
              ]
          })
export class AppRouting {
}
