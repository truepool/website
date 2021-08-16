import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit,
} from '@angular/core';
import { Params } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ContentLanguage } from 'src/app/interfaces/content-item.interface';
import { LanguageService } from 'src/app/services/language.service';

@UntilDestroy()
@Component({
  selector: 'app-available-in-other-languages',
  templateUrl: 'available-in-other-languages.component.html',
  styleUrls: ['./available-in-other-languages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailableInOtherLanguagesComponent implements OnInit, OnChanges {
  @Input() languages: ContentLanguage[];

  otherLanguages: string[];
  currentLanguage: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.languageService.getUrlLanguage()
      .pipe(untilDestroyed(this))
      .subscribe((language) => {
        this.currentLanguage = language || 'en';
        this.updateOtherLanguages();
        this.cdr.markForCheck();
      });
  }

  ngOnChanges(): void {
    this.updateOtherLanguages();
  }

  languageQueryParams(language: string): Params {
    if (language === 'en') {
      return { [LanguageService.urlLanguageParam]: null };
    }
    return { [LanguageService.urlLanguageParam]: language };
  }

  private updateOtherLanguages(): void {
    const otherLanguages = new Set<string>();
    this.languages.forEach((contentLanguage) => otherLanguages.add(contentLanguage.language));
    otherLanguages.add('en');
    otherLanguages.delete(this.currentLanguage);
    this.otherLanguages = Array.from(otherLanguages.values());
  }
}
