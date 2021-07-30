import { DecimalPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FileSizePipe, NgxFilesizeModule } from 'ngx-filesize';
import { MarkdownModule } from 'ngx-markdown';
import { PagerComponent } from 'src/app/components/pager/pager.component';
import { FarmerSearchPromptComponent } from 'src/app/pages/farmers-page/farmer-search-prompt/farmer-search-prompt.component';
import { FarmerSearchComponent } from 'src/app/pages/farmers-page/farmer-search/farmer-search.component';
import { PartialsChartComponent } from 'src/app/pages/farmers-page/partials-chart/partials-chart.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContentLoaderComponent } from './components/content-loader/content-loader.component';
import { ContributionPromptComponent } from './components/contribution-prompt/contribution-prompt.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PoolSizeChartComponent } from './components/pool-size-chart/pool-size-chart.component';
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
import { XchPipe } from './pipes/xch.pipe';
import { SharedModule } from './shared.module';
import { PoolSizesEffects } from './stores/pool-sizes/pool-sizes.effects';
import { poolSizesReducer } from './stores/pool-sizes/pool-sizes.reducer';
import { poolSizeStateKey } from './stores/pool-sizes/pool-sizes.selectors';

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
    PagerComponent,
    PartialsChartComponent,

    // Pages
    StatsPageComponent,
    FarmersPageComponent,
    FrontPageComponent,
    GenericArticleComponent,
    KnowledgeBaseArticleComponent,
    KnowledgeBaseListingComponent,
    NotFoundPageComponent,
    SetNameComponent,

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
    NgxFilesizeModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserAnimationsModule,
    PayoutPageModule,
  ],
  providers: [
    FileSizePipe,
    DecimalPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
