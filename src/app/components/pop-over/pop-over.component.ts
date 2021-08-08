import { Component, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('120ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ]
})
export class PopOverComponent {
    @Input() popDetails: string;

  show = false;

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  onShow() {
      this.show = true;
  }

  onHide() {
      this.show = false;
  }

}
