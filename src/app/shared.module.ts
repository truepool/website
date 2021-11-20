import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxFilesizeModule } from 'ngx-filesize';
import { ContentLoaderComponent } from './components/content-loader/content-loader.component';
import { FarmerDetailsComponent } from './components/farmer-details/farmer-details.component';
import { PagerComponent } from './components/pager/pager.component';
import { PoolDetailsBarComponent } from './components/pool-details-bar/pool-details-bar.component';
import { PartialsChartComponent } from './pages/farmers-page/partials-chart/partials-chart.component';
import { XchPipe } from './pipes/xch.pipe';

const modules = [CommonModule, NgxFilesizeModule, ReactiveFormsModule];
const components = [
  ContentLoaderComponent,
  FarmerDetailsComponent,
  PagerComponent,
  PartialsChartComponent,
  PoolDetailsBarComponent,
];
const pipes = [XchPipe];

@NgModule({
  imports: [...modules, RouterModule],
  declarations: [...components, ...pipes],
  exports: [...modules, ...components, ...pipes],
})
export class SharedModule {}
