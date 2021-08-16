import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentItem } from 'src/app/interfaces/content-item.interface';
import { LanguageService } from 'src/app/services/language.service';

@Injectable({ providedIn: 'root' })
export class ContentService {
  constructor(
    private languageService: LanguageService,
  ) {}

  getMarkdownSrc(article: ContentItem): Observable<string> {
    return this.languageService.getUrlLanguage().pipe(
      map((language) => {
        if (language) {
          return `/content/${article.path}.${language}.md`;
        }

        return `/content/${article.path}.md`;
      }),
    );
  }

  getContentTitle(article: ContentItem): Observable<string> {
    return this.languageService.getUrlLanguage().pipe(
      map((language) => {
        if (language) {
          return article.extraLanguages.find((extraLanguage) => extraLanguage.language === language)?.title;
        }

        return article.title;
      }),
    );
  }
}
