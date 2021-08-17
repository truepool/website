import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { filter, map, take } from 'rxjs/operators';
import { FarmerStore } from '../farmer.store';

@UntilDestroy(this)
@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FarmerComponent {
  launcherId$ = this.ar.paramMap.pipe(map((pMap) => pMap.get('launcherId')));
  farmer$ = this.farmerStore.state$.pipe(
    filter((state) => !state.isLoading),
    map((state) => state.farmer),
  );

  constructor(private ar: ActivatedRoute, private farmerStore: FarmerStore) {}

  ngOnInit(): void {
    this.launcherId$.pipe(take(1)).subscribe(this.farmerStore.loadFarmer);
  }
}
