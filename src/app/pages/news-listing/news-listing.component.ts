import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { compareAsc, compareDesc, isAfter, parse } from 'date-fns';
import { getOrderedNews } from 'src/app/utils/get-ordered-news.utils';
import { newsItems } from 'src/content/news/news-directory';

@Component({
  templateUrl: 'news-listing.component.html',
  styleUrls: ['./news-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListingComponent {
  readonly allowedPrefix = 'news/';

  readonly newsItems = getOrderedNews();
}
