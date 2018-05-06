import { Component, OnInit } from '@angular/core';

const imageDir = '/assets/space-images';

@Component({
  selector: 'cgp-image-gallery-example',
  templateUrl: './image-gallery-example.component.html',
  styleUrls: ['./image-gallery-example.component.scss']
})
export class ImageGalleryExampleComponent implements OnInit {

  static label: string = 'Image Gallery';

  imageUrls: string[] = [
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
  ].map( (name: string) => imageDir + '/' + name );

  constructor() { }

  ngOnInit() {
  }

}
