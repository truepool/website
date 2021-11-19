import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { map, take } from 'rxjs/operators';
import { FarmerPartial } from 'src/app/interfaces/farmer-partial.interface';
import { FarmerSearchStore } from '../farmers-page/farmer-search/farmer-search.store';

@UntilDestroy(this)
@Component({
  selector: 'app-farmer-page',
  styleUrls: ['./farmer-page.component.scss'],
  templateUrl: './farmer-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FarmerSearchStore],
})
export class FarmerPageComponent {
  state$ = this.store.state$;
  result$ = this.state$.pipe(
    map((state) => (Array.isArray(state.results) && state.results.length > 0
      ? state.results[0]
      : null)),
  );

  constructor(
    private ar: ActivatedRoute,
    private store: FarmerSearchStore,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.ar.paramMap
      .pipe(
        take(1),
        map((pMap) => pMap.get('launcherId')),
      )
      .subscribe(this.store.searchFarmer);

    this.state$.subscribe((state) => {
      if (!state.isLoading && state.results.length === 0) {
        void this.router.navigateByUrl('/404');
      }
    });
  }

  filterErrors(partials: FarmerPartial[]): FarmerPartial[] {
    return partials.filter((partial) => partial.error);
  }
}
