import { ChangeDetectionStrategy, Component } from '@angular/core';
import { getOrderedNews } from 'src/app/utils/get-ordered-news.utils';

@Component({
  selector: 'app-news',
  templateUrl: 'news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  lastNews = getOrderedNews().slice(0, 3);
}
