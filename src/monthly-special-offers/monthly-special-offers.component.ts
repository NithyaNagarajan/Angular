import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer';
import { OfferService} from '../offer.service';

@Component({
  selector: 'app-monthly-special-offers',
  templateUrl: './monthly-special-offers.component.html',
  styleUrls: ['./monthly-special-offers.component.css']
})
export class MonthlySpecialOffersComponent implements OnInit {
  monthlyOffers: Offer[] = [];
  offers: Offer[] = [];

  constructor(private offerService : OfferService) { }

  ngOnInit() {
    this.getMonthlyOffers();
  }

  getMonthlyOffers() : void {
    this.offers = this.offerService.getOffersAvailable()
    this.monthlyOffers = this.offers.slice(1,3);
  }

}
