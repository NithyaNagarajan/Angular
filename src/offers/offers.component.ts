import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private offerService : OfferService) { }

  ngOnInit() {
    this.getAvailabeOffers();
  }

  offersAvailable;
  getAvailabeOffers(): void{
    this.offersAvailable = this.offerService.getOffersAvailable();
  }

  offerSelected : Offer;
  onSelect(offer: Offer): void {
    this.offerSelected = offer;
  }


}
