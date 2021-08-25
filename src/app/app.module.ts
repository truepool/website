import { DecimalPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FileSizePipe } from 'ngx-filesize';
import { MarkdownModule } from 'ngx-markdown';
import { NgxPopperModule } from 'ngx-popper';
import { FarmerDetailsComponent } from 'src/app/components/farmer-details/farmer-details.component';
import {
  AvailableInOtherLanguagesComponent,
} from 'src/app/components/available-in-other-languages/available-in-other-languages.component';
import { MarkdownArticleComponent } from 'src/app/components/markdown-article/markdown-article.component';
import {
  FarmerSearchPromptComponent,
} from 'src/app/pages/farmers-page/farmer-search-prompt/farmer-search-prompt.component';
import { FarmerSearchComponent } from 'src/app/pages/farmers-page/farmer-search/farmer-search.component';
import { PartialsChartComponent } from 'src/app/pages/farmers-page/partials-chart/partials-chart.component';
import { NewsArticleComponent } from 'src/app/pages/news-article/news-article.component';
import { NewsListingComponent } from 'src/app/pages/news-listing/news-listing.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContributionPromptComponent } from './components/contribution-prompt/contribution-prompt.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PoolSizeChartComponent } from './components/pool-size-chart/pool-size-chart.component';
import { PoptipComponent } from './components/poptip/poptip.component';
import { LetDirective } from './directives/let.directive';
import { SmoothlyScrollToDirective } from './directives/smoothly-scroll-to.directive';
import { FarmersPageComponent } from './pages/farmers-page/farmers-page.component';
import { LeaderboardComponent } from './pages/farmers-page/leaderboard/leaderboard.component';
import { AboutUsComponent } from './pages/front-page/about-us/about-us.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { LeadSectionComponent } from './pages/front-page/lead-section/lead-section.component';
import { NewsComponent } from './pages/front-page/news/news.component';
import { OperatorsComponent } from './pages/front-page/operators/operators.component';
import { GenericArticleComponent } from './pages/generic-article/generic-article.component';
import { KnowledgeBaseArticleComponent } from './pages/knowledge-base-article/knowledge-base-article.component';
import { KnowledgeBaseListingComponent } from './pages/knowledge-base-listing/knowledge-base-listing.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PayoutPageModule } from './pages/payout-page/payout-page.module';
import { SetNameComponent } from './pages/set-name/set-name.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { MinutesPipe } from './pipes/minutes.pipe';
import { SharedModule } from './shared.module';
import { PoolSizesEffects } from './stores/pool-sizes/pool-sizes.effects';
import { poolSizesReducer } from './stores/pool-sizes/pool-sizes.reducer';
import { poolSizeStateKey } from './stores/pool-sizes/pool-sizes.selectors';
import { CoinTableComponent } from './pages/stats-page/coin-table/coin-table.component';
import { PayoutTableComponent } from './pages/stats-page/payout-table/payout-table.component';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    ContactFormComponent,
    AboutUsComponent,
    PoolSizeChartComponent,
    OperatorsComponent,
    NewsComponent,
    HeaderComponent,
    LeadSectionComponent,
    LeaderboardComponent,
    FarmerSearchPromptComponent,
    FooterComponent,
    ContributionPromptComponent,
    PartialsChartComponent,
    MarkdownArticleComponent,
    PoptipComponent,
    AvailableInOtherLanguagesComponent,

    // Pages
    StatsPageComponent,
    FarmersPageComponent,
    FrontPageComponent,
    GenericArticleComponent,
    KnowledgeBaseArticleComponent,
    KnowledgeBaseListingComponent,
    NotFoundPageComponent,
    SetNameComponent,
    NewsListingComponent,
    NewsArticleComponent,
    CoinTableComponent,
    PayoutTableComponent,

    // Directives
    SmoothlyScrollToDirective,
    LetDirective,

    // Pipes
    MinutesPipe,
    FarmerSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({
      [poolSizeStateKey]: poolSizesReducer,
    }),
    EffectsModule.forRoot([PoolSizesEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
    BrowserAnimationsModule,
    PayoutPageModule,
    FormsModule,
    NgxPopperModule.forRoot({}),
  ],
  providers: [FileSizePipe, DecimalPipe],
  bootstrap: [AppComponent],
  exports: [
    FarmerDetailsComponent,
  ],
})
export class AppModule {}
