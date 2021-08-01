import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsArticleComponent } from 'src/app/pages/news-article/news-article.component';
import { NewsListingComponent } from 'src/app/pages/news-listing/news-listing.component';
import { GenericArticleComponent } from './pages/generic-article/generic-article.component';
import { KnowledgeBaseArticleComponent } from './pages/knowledge-base-article/knowledge-base-article.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { FarmersPageComponent } from './pages/farmers-page/farmers-page.component';
import { KnowledgeBaseListingComponent } from './pages/knowledge-base-listing/knowledge-base-listing.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SetNameComponent } from './pages/set-name/set-name.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'stats',
    component: StatsPageComponent,
  },
  {
    path: 'farmers',
    component: FarmersPageComponent,
  },
  {
    path: 'payout',
    loadChildren: () => import('./pages/payout-page/payout-page.module').then(m => m.PayoutPageModule)
  },
  {
    path: 'kb',
    component: KnowledgeBaseListingComponent,
    pathMatch: 'full',
  },
  {
    path: 'kb/:id',
    component: KnowledgeBaseArticleComponent,
  },
  {
    path: 'set-name',
    component: SetNameComponent,
  },
  {
    // Backwards compatibility for an article with existing links
    path: 'pages/news',
    redirectTo: '/news/update-2021-07-25',
  },
  {
    path: 'news',
    component: NewsListingComponent,
    pathMatch: 'full',
  },
  {
    path: 'news/:slug',
    component: NewsArticleComponent,
  },
  {
    path: 'pages/:id',
    component: GenericArticleComponent,
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
