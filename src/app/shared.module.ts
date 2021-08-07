import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxFilesizeModule } from 'ngx-filesize';
import { ContentLoaderComponent } from './components/content-loader/content-loader.component';
import { PoolDetailsBarComponent } from './components/pool-details-bar/pool-details-bar.component';
import { XchPipe } from './pipes/xch.pipe';

const modules = [CommonModule, NgxFilesizeModule];
const components = [ContentLoaderComponent, PoolDetailsBarComponent];
const pipes = [XchPipe];

@NgModule({
  imports: [...modules],
  declarations: [...components, ...pipes],
  exports: [...modules, ...components, ...pipes],
})
export class SharedModule {}
