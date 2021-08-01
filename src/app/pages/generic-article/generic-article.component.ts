import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contentDirectory } from '../../../content/content-directory';
import { ContentItem } from '../../interfaces/content-item.interface';

@Component({
  templateUrl: 'generic-article.component.html',
  styleUrls: ['./generic-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericArticleComponent implements OnInit {
  readonly pagePrefix = 'pages/';

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
    const id = this.activatedRoute.snapshot.params.id as string;
    const article = contentDirectory.find((item) => item.url === `${this.pagePrefix}${id}`);

    if (!article) {
      void this.router.navigate(['/404']);
      return;
    }

    this.article = article;
  }
}
