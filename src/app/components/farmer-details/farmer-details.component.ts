import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Farmer } from 'src/app/interfaces/farmer.interface';

@Component({
  selector: 'app-farmer-details',
  templateUrl: 'farmer-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FarmerDetailsComponent {
  @Input() farmer: Farmer;
}
