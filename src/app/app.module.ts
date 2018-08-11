import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRouting } from 'app/app.routing';

@NgModule({
              declarations: [
                  AppComponent
              ],
              imports     : [
                  BrowserModule,
                  CommonModule,
                  BrowserAnimationsModule,
                  FormsModule,
                  AppRouting
              ],
              providers   : [],
              bootstrap   : [AppComponent]
          })
export class AppModule {
}
