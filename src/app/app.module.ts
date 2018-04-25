import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayingCardExampleComponent } from './playing-card-example/playing-card-example.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayingCardExampleComponent,
    PlayingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
