import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PoolSizeState } from '../../../stores/pool-sizes/pool-sizes.reducer';
import { selectLatestPoolSize } from '../../../stores/pool-sizes/pool-sizes.selectors';

@Component({
  selector: 'app-lead-section',
  templateUrl: 'lead-section.component.html',
  styleUrls: ['./lead-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadSectionComponent {
  latestPoolSize$: Observable<number> = this.store.select(selectLatestPoolSize);

  constructor(
    private store: Store<PoolSizeState>
  ) {}
}
