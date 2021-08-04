import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { PayoutPageComponent } from './payout-page.component';
import { PayoutSearchComponent } from './payout-search/payout-search.component';

const PAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: PayoutPageComponent,
    children: [{ path: ':id', component: PayoutSearchComponent }]
  }
];
@NgModule({
  declarations: [PayoutPageComponent, PayoutSearchComponent],
  imports: [RouterModule.forChild(PAYOUT_ROUTES), SharedModule]
})
export class PayoutPageModule {}
