import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cgp-chessboard-example',
  templateUrl: './chessboard-example.component.html',
  styleUrls: ['./chessboard-example.component.scss']
})
export class ChessboardExampleComponent implements OnInit {

  static label: string = 'Chessboard';

  board: string[][] = Array(8).fill( Array(8).fill('') );
  rotx: number = 0;
  roty: number = 0;
  rotz: number = 0;

  constructor(private sanitizer: DomSanitizer) { }

  calculateTransformations() {
    this.transformations = this.sanitizer.bypassSecurityTrustStyle(
        ' rotateX(' + this.rotx + 'deg) '
      + ' rotateY(' + this.roty + 'deg) '
      + ' rotateZ(' + this.rotz + 'deg) '
    );
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {

    switch (event.code) {

      case 'Space':
        this.rotx = 0;
        this.roty = 0;
        this.rotz = 0;
        break;

      case 'ArrowUp':
        this.rotx++;
        break;

      case 'ArrowDown':
        this.rotx--;
        break;

      case 'ArrowLeft':
        this.roty--;
        break;

      case 'ArrowRight':
        this.roty++;
        break;

      case 'KeyZ':
        this.rotz--;
        break;

      case 'KeyX':
        this.rotz++;
        break;
    }

    this.calculateTransformations();
  }

  ngOnInit() {
    this.calculateTransformations();
  }
}
