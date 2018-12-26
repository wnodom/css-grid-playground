import { Component } from '@angular/core';

import { examples } from './examples';

@Component({
  selector: 'cgp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CSS Grid Playground';

  showNav: boolean;
  examples = examples;
}
