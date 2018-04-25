import { Component, OnInit, Input } from '@angular/core';

const symbols = {
  clubs:    '\u2663',
  diamonds: '\u2666',
  hearts:   '\u2665',
  spades:   '\u2660',
};

const rankToNumberOfSymbols = {
  'A': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10' 10,
  'J': 1,
  'Q': 1,
  'K': 1,
};

@Component({
  selector: 'cgp-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.scss']
})
export class PlayingCardComponent implements OnInit {
  @Input() suit: string = '';
  @Input() rank: string = '';

  symbol: string = '';
  picSymbols: string[] = [];

  constructor() { }

  ngOnInit() {
    this.symbol = symbols[this.suit];

    this.picSymbols = Array( rankToNumberOfSymbols[this.rank] ).fill(this.symbol);
  }

}
