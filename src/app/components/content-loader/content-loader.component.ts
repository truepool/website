import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-loader',
  templateUrl: 'content-loader.component.html',
  styleUrls: ['./content-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentLoaderComponent {
  @Input() isLoading: boolean;
  @Input() error: string;
}
