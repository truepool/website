import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-ce-block',
  templateUrl: './ce-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeBlockComponent {
  @Input() blockId: string | number;
}
