import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getOrderedNews } from 'src/app/utils/get-ordered-news.utils';

@Component({
  templateUrl: 'news-listing.component.html',
  styleUrls: ['./news-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListingComponent {
  readonly newsItems = getOrderedNews();
}
