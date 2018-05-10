import { Component } from '@angular/core';

const imageDir = '/assets/space-images';

@Component({
  selector: 'cgp-captioned-image-example',
  templateUrl: './captioned-image-example.component.html',
  styleUrls: ['./captioned-image-example.component.scss']
})
export class CaptionedImageExampleComponent {

  static label: string = 'Captioned Images';

  imageFilenames: string[] = [
    'black-eye-galaxy.jpg',
    'blue-bubble.jpg',
    'bubble-nebula.jpg',
    'butterfly-nebula.jpg',
    'charon.jpg',
    'complete-galactic-plane.jpg',
    'eagle-nebula.jpg',
    'einstein-ring.jpg',
    'far-side-of-the-moon.jpg',
    'hoags-object.jpg',
    'io.jpg',
    'messier-106.jpg',
    'monkey-head-nebula.jpg',
    'ngc-7822-infrared.jpg',
    'ngc-7822-visible-long-exposure.jpg',
    'orion-constellation.jpg',
    'smiling-lens.jpg',
    'thors-helmet-nebula.jpg',
    'toothbrush-nebula.jpg',
    'veil-nebula-supernova-remnant.jpg',
  ];

  imageUrls = this.imageFilenames.map( (name: string) => imageDir + '/' + name );
}

