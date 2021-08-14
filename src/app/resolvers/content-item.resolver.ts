import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { ContentItem } from 'src/app/interfaces/content-item.interface';
import { contentDirectory } from 'src/content/content-directory';

@Injectable({ providedIn: 'root' })
export class ContentItemResolver implements Resolve<ContentItem> {
  constructor(
    private router: Router,
  ) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot): Observable<ContentItem> {
    const url = routeSnapshot.url.join('/');
    const article = contentDirectory.find((item) => item.url === `${url}`);

    if (!article) {
      void this.router.navigate(['/404']);
      return EMPTY;
    }

    return of(article);
  }
}
