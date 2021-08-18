import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ce-block',
  templateUrl: './ce-block.component.html',
  styleUrls: ['./ce-block.component.scss'],
})
export class CeBlockComponent {
  @Input() blockId: string | number;
}
