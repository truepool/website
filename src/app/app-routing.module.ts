import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericArticleComponent } from './pages/generic-article/generic-article.component';
import { KnowledgeBaseArticleComponent } from './pages/knowledge-base-article/knowledge-base-article.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { FarmersPageComponent } from './pages/farmers-page/farmers-page.component';
import { KnowledgeBaseListingComponent } from './pages/knowledge-base-listing/knowledge-base-listing.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
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
    path: 'kb',
    component: KnowledgeBaseListingComponent,
    pathMatch: 'full',
  },
  {
    path: 'kb/:id',
    component: KnowledgeBaseArticleComponent,
  },
  {
    path: 'pages/:id',
    component: GenericArticleComponent,
  },
  {path: '404', component: NotFoundPageComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
