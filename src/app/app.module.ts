import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app-root/app.component';

import { MainBoardModule } from 'src/app/main-board/main-board.module';

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
