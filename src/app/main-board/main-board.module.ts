import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './pages';
import { MapSvgComponent } from './components/';

@NgModule({
  declarations: [
    DashboardComponent,
    MapSvgComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    DashboardComponent,
    MapSvgComponent,
  ]
})
export class MainBoardModule { }
