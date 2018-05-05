import { Component, OnInit, Input } from '@angular/core';

const imageDir = '/assets/card-faces';

const symbols = {
  clubs:    '\u2663',
  diamonds: '\u2666',
  hearts:   '\u2665',
  spades:   '\u2660',
};

const rankToNumberOfPips = {
  'A':  1,
  '2':  2,
  '3':  3,
  '4':  4,
  '5':  5,
  '6':  6,
  '7':  7,
  '8':  8,
  '9':  9,
  '10': 10,
  'J':  0,
  'Q':  0,
  'K':  0,
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
  cardImageUrl: string = '';

  constructor() { }

  ngOnInit() {
    let numPips = rankToNumberOfPips[this.rank];

    this.symbol = symbols[this.suit];

    if (numPips > 0) {
      this.picSymbols = Array(numPips).fill(this.symbol);
    }
    else {
      this.cardImageUrl = imageDir + '/' + this.rank + '-' + this.suit + '.png';
    }
  }

}
