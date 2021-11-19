import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { FarmerPageComponent } from './farmer-page.component';

const farmerRoutes: Routes = [
  {
    path: ':launcherId',
    component: FarmerPageComponent,
  },
];

@NgModule({
  declarations: [FarmerPageComponent],
  imports: [RouterModule.forChild(farmerRoutes), SharedModule],
})
export class FarmerPageModule {}
