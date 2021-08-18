import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFilesizeModule } from 'ngx-filesize';
import { FarmerDetailsComponent } from 'src/app/components/farmer-details/farmer-details.component';
import { ContentLoaderComponent } from './components/content-loader/content-loader.component';
import { PagerComponent } from './components/pager/pager.component';
import { PoolDetailsBarComponent } from './components/pool-details-bar/pool-details-bar.component';
import { XchPipe } from './pipes/xch.pipe';

const modules = [CommonModule, NgxFilesizeModule, ReactiveFormsModule];
const components = [
  ContentLoaderComponent,
  PagerComponent,
  PoolDetailsBarComponent,
  FarmerDetailsComponent,
];
const pipes = [XchPipe];

@NgModule({
  imports: [...modules],
  declarations: [...components, ...pipes],
  exports: [...modules, ...components, ...pipes],
})
export class SharedModule {}
