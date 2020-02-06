import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from 'src/app/main-board/pages/dashboard/dashboard.component';

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
