import { Component } from '@angular/core';

@Component({
  selector: 'cgp-sandbox-example',
  templateUrl: './sandbox-example.component.html',
  styleUrls: ['./sandbox-example.component.scss']
})
export class SandboxExampleComponent implements OnInit {
  static label: string = 'Sandbox';
}
