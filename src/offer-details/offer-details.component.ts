import { Component, OnInit , Input} from '@angular/core';
import { Offer } from '../offer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OfferService }  from '../offer.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  offer: Offer;

  constructor(private route: ActivatedRoute,
              private offerService: OfferService,
              private location: Location) { 
    
  }

  ngOnInit() {
    this.getOffer();
  }
  getOffer(): void {
    const id = +this.route.snapshot.paramMap.get('offerId');
    this.offer = this.offerService.getOffer(id);
  }
  
}
