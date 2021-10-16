import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FarmerPartial } from 'src/app/interfaces/farmer-partial.interface';
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
  @Input() set query(rawValue: string) {
    let value = rawValue;
    if (value.startsWith('0x')) {
      value = value.substring(2);
    }

    this.store.searchFarmer(value);
  }

  constructor(private store: FarmerSearchStore) {}

  filterErrors(partials: FarmerPartial[]): FarmerPartial[] {
    return partials.filter((partial) => partial.error);
  }
}
