import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, ViewChild,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { finalize } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-markdown-article',
  templateUrl: 'markdown-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./markdown-article.component.scss'],
})
export class MarkdownArticleComponent implements OnInit, OnChanges {
  @Input() markdownUrl: string;

  @ViewChild(MarkdownComponent, { static: false }) markdownComponent: MarkdownComponent;

  // TODO: Can be moved to store.
  markdown: string;
  isLoading = false;
  loadingError: string;

  constructor(
    private markdownService: MarkdownService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.extendMarkdown();
  }

  ngOnChanges(): void {
    this.loadMarkdown();
  }

  private loadMarkdown(): void {
    this.isLoading = true;
    this.loadingError = null;
    this.markdownService.getSource(this.markdownUrl)
      .pipe(
        finalize(() => this.isLoading = false),
        untilDestroyed(this),
      )
      .subscribe(
        (markdown) => {
          this.markdown = markdown;

          // This should not be necessary, but somehow is need when changing languages.
          // Probably an issue with underlying ngx-markdown.
          this.markdownComponent?.render(markdown);
          this.cdr.markForCheck();
        },
        () => {
          this.loadingError = 'Article could not be loaded.';
          this.cdr.markForCheck();
        },
      );
  }

  /**
   * Additional non-default markdown functionality.
   */
  private extendMarkdown(): void {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return `<h${level}>`
        + `<a name="${escapedText}" class="anchor" href="#${escapedText}">`
        + `</a>${text}</h${level}>`;
    };
  }
}
