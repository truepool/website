import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FarmerSearchStore } from './farmer-search.store';

@Component({
  selector: 'app-farmer-search',
  templateUrl: 'farmer-search.component.html',
  styleUrls: ['./farmer-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FarmerSearchComponent {
  state$ = this.store.state$;

  searchControl = new FormControl();

  constructor(
    private store: FarmerSearchStore,
  ) {}

  onSearchSubmitted(event: Event): void {
    const launcherId = this.searchControl.value as string;

    this.store.searchFarmer(launcherId);

    event.preventDefault();
  }
}
