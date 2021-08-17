import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { FarmerPageComponent } from './farmer-page.component';
import { FarmerComponent } from './farmer/farmer.component';

const farmerRoutes: Routes = [
  {
    path: '',
    component: FarmerPageComponent,
    children: [{ path: ':launcherId', component: FarmerComponent }],
  },
];

@NgModule({
  declarations: [FarmerComponent, FarmerPageComponent],
  imports: [RouterModule.forChild(farmerRoutes), SharedModule],
})
export class FarmerPageModule {}
