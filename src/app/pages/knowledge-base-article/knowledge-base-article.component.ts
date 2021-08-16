import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';
import { ContentItem } from '../../interfaces/content-item.interface';

@Component({
  templateUrl: 'knowledge-base-article.component.html',
  styleUrls: ['./knowledge-base-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KnowledgeBaseArticleComponent implements OnInit {
  article: ContentItem;
  markdownSrc$: Observable<string>;
  title$: Observable<string>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService,
  ) {
    this.article = this.activatedRoute.snapshot.data.article as ContentItem;
  }

  ngOnInit(): void {
    this.markdownSrc$ = this.contentService.getMarkdownSrc(this.article);
    this.title$ = this.contentService.getContentTitle(this.article);
  }
}
