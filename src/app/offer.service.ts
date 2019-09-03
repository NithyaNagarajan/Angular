import { Injectable } from '@angular/core';
import { Offer } from './offer';
import { OFFERS} from './offers-data';


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor() { }

  getOffersAvailable() : Offer[]{
    return OFFERS;
  }

  getOffer(offerCode: number){
    return (OFFERS.find(offer => offer.offerId === offerCode));
  }
}
