import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  static readonly urlLanguageParam = 'lang';

  constructor(
    private route: ActivatedRoute,
  ) {}

  getUrlLanguage(): Observable<string> {
    return this.route.queryParams.pipe(
      map((params) => params[LanguageService.urlLanguageParam] as string),
    );
  }
}
