import { Component } from '@angular/core';

const imageDir: string = '/assets/css-illustrations';

@Component({
  selector: 'cgp-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss']
})
export class IllustrationsComponent {

  imageUrls: string[] = [
    'css-bears.gif',
    'css-properties-walk-into-a-bar.png',
    'css-is-easy.png',
    'seeing-what-happens.jpg',
  ].map( (name: string) => imageDir + '/' + name );

}
