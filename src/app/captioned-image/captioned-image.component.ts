import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cgp-captioned-image',
  templateUrl: './captioned-image.component.html',
  styleUrls: ['./captioned-image.component.scss']
})
export class CaptionedImageComponent implements OnInit {
  @Input() src: string;
  @Input() caption: string;

  constructor() { }

  ngOnInit() {
  }

}
