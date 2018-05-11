import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayingCardExampleComponent } from './playing-card-example/playing-card-example.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
import { ImageGalleryExampleComponent } from './image-gallery-example/image-gallery-example.component';
import { CaptionedImageComponent } from './captioned-image/captioned-image.component';
import { CaptionedImageExampleComponent } from './captioned-image-example/captioned-image-example.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChessboardExampleComponent } from './chessboard-example/chessboard-example.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayingCardExampleComponent,
    PlayingCardComponent,
    ImageGalleryExampleComponent,
    CaptionedImageComponent,
    CaptionedImageExampleComponent,
    ChessboardExampleComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
