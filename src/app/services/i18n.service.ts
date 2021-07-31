import { Injectable } from '@angular/core';
import { TruePoolI18n } from '../interfaces/i18n.interface';
import * as text from './../../../truepool-i18n.json';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly localStorageKey = 'tp-i18n';
  private readonly text: TruePoolI18n = text;
  private readonly supportedLanguageCodes = ['en', 'ja', 'pl', 'uk'];

  private languageCode = 'en';

  constructor() {
    let userPreference = window.localStorage.getItem(this.localStorageKey);
    if (!userPreference) {
      window.localStorage.setItem(this.localStorageKey, this.languageCode);
      userPreference = this.languageCode;
    }
    this.setLanguage(userPreference);
  }

  setLanguage(languageCode: string): void {
    if (!this.isSupportedLanguage(languageCode)) {
      return;
    }
    window.localStorage.setItem(this.localStorageKey, languageCode);
    this.languageCode = languageCode;
  }

  translate(str: string): string {
    return this.text[str][this.languageCode];
  }

  private isSupportedLanguage(languageCode: string): boolean {
    for (let i = 0; i < this.supportedLanguageCodes.length; i++) {
      if (languageCode === this.supportedLanguageCodes[i]) {
        return true;
      }
    }

    return false;
  }
}
