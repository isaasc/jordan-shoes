import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TennisShowcaseComponent } from './tennis-showcase/tennis-showcase.component';
import { TennisSquareComponent } from './tennis-square/tennis-square.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TennisShowcaseComponent,
    TennisSquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
