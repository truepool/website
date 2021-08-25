import { Component, Input } from '@angular/core';

@Component({
  selector: 'poptip',
  templateUrl: 'poptip.component.html',
  styleUrls: ['./poptip.component.scss'],
})

export class PoptipComponent {
  @Input() msg: string;
}
