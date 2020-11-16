import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './pages';
import { CalloutListComponent, MapSvgComponent } from './components/';

@NgModule({
  declarations: [
    CalloutListComponent,
    DashboardComponent,
    MapSvgComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    CalloutListComponent,
    DashboardComponent,
    MapSvgComponent,
  ]
})
export class MainBoardModule { }
