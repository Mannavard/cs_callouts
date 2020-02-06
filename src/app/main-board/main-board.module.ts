import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './pages';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    DashboardComponent
  ]
})
export class MainBoardModule { }
