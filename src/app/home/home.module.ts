import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRouting } from 'app/home/home.routing';

@NgModule({
              imports     : [
                  CommonModule,
                  HomeRouting
              ],
              declarations: [HomeComponent]
          })
export class HomeModule {
}
