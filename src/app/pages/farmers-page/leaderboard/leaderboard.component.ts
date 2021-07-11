import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeaderboardStore } from './leaderboard.store';

@Component({
  selector: 'app-leaderboard',
  templateUrl: 'leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaderboardComponent implements OnInit {
  state$ = this.store.state$;

  constructor(private store: LeaderboardStore) {}

  ngOnInit(): void {
    this.store.loadFarmers();
  }
}
