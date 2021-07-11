import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeaderboardStore } from './leaderboard/leaderboard.store';

@Component({
  templateUrl: 'farmers-page.component.html',
  styleUrls: ['./farmers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FarmersPageComponent {
}
