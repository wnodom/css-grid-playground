import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayingCardExampleComponent } from './playing-card-example/playing-card-example.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
import { ImageGalleryExampleComponent } from './image-gallery-example/image-gallery-example.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayingCardExampleComponent,
    PlayingCardComponent,
    ImageGalleryExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
