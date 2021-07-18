import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'farmers-page.component.html',
  styleUrls: ['./farmers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FarmersPageComponent {
}
