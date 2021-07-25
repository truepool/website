import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FarmerSearchStore } from 'src/app/pages/farmers-page/farmer-search/farmer-search.store';

@Component({
  selector: 'app-farmer-search-results',
  templateUrl: 'farmer-search.component.html',
  styleUrls: ['./farmer-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FarmerSearchStore],
})
export class FarmerSearchComponent {
  state$ = this.store.state$;

  /**
   * Launcher id or search query.
   */
  @Input() set query(value: string) {
    this.store.searchFarmer(value);
  }

  constructor(private store: FarmerSearchStore) {}
}
