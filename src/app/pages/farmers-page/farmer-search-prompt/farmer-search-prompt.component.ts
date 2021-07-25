import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-farmer-search-prompt',
  templateUrl: 'farmer-search-prompt.component.html',
  styleUrls: ['./farmer-search-prompt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FarmerSearchPromptComponent {
  searchControl = new FormControl();

  showSearch = false;

  onSearchSubmitted(event: Event): void {
    this.showSearch = true;

    event.preventDefault();
  }
}
