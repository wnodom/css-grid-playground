import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cgp-playing-card-example',
  templateUrl: './playing-card-example.component.html',
  styleUrls: ['./playing-card-example.component.scss']
})
export class PlayingCardExampleComponent implements OnInit {

  static label: string = 'Playing Card';

  constructor() { }

  ngOnInit() {
  }

}
