import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentItem } from 'src/app/interfaces/content-item.interface';
import { newsItems } from 'src/content/news/news-directory';
import { contentDirectory } from '../../../content/content-directory';

@Component({
  templateUrl: 'news-article.component.html',
  styleUrls: ['./news-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsArticleComponent {
  readonly pagePrefix = 'news/';

  article: ContentItem;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  get markdownSrc(): string {
    return `/content/${this.article.url}.md`;
  }

  // TODO: Job for resolver
  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.params.slug as string;
    const article = newsItems.find((item) => item.url === `${this.pagePrefix}${slug}`);

    if (!article) {
      void this.router.navigate(['/404']);
      return;
    }

    this.article = article;
  }
}
