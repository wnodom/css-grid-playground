import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cgp-playing-card-example',
  templateUrl: './playing-card-example.component.html',
  styleUrls: ['./playing-card-example.component.scss']
})
export class PlayingCardExampleComponent implements OnInit {

  static label: string = 'Playing Card';

  suits: string[] = [
    'spades',
    'hearts',
    'clubs',
    'diamonds',
  ];

  ranks: string[] =
    [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];

  constructor() { }

  ngOnInit() {
  }

}
