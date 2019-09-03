import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { MonthlySpecialOffersComponent } from './monthly-special-offers/monthly-special-offers.component';
import { OfferDetailsComponent} from './offer-details/offer-details.component'

const routes: Routes = [
  { path: 'offers', component: OffersComponent },
  { path: 'monthlySpecialOffers', component: MonthlySpecialOffersComponent},
  { path: '', redirectTo: '/monthlySpecialOffers', pathMatch:'full'},
  { path: 'detail/:offerId', component: OfferDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }