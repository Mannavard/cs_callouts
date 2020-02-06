import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app-root/app.component';

import { MainBoardModule } from './main-board';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainBoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
