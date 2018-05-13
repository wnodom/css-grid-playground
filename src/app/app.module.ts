import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SandboxExampleComponent } from './sandbox-example/sandbox-example.component';
import { PlayingCardExampleComponent } from './playing-card-example/playing-card-example.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
import { ImageGalleryExampleComponent } from './image-gallery-example/image-gallery-example.component';
import { CaptionedImageComponent } from './captioned-image/captioned-image.component';
import { CaptionedImageExampleComponent } from './captioned-image-example/captioned-image-example.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChessboardExampleComponent } from './chessboard-example/chessboard-example.component';
import { ResourcesComponent } from './resources/resources.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SandboxExampleComponent,
    PlayingCardExampleComponent,
    PlayingCardComponent,
    ImageGalleryExampleComponent,
    CaptionedImageComponent,
    CaptionedImageExampleComponent,
    ChessboardExampleComponent,
    IllustrationsComponent,
    ResourcesComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
