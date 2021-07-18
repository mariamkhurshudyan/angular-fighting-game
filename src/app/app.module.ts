import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FightingGameComponent } from './fighting-game/fighting-game.component';

@NgModule({
  declarations: [
    AppComponent,
    FightingGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
