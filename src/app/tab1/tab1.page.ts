import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  datetime: string;
  sender: string;
  receiver: string;
  vehicle: string;
  price: string;

  constructor(public router: Router){
  if (router.getCurrentNavigation().extras.state) {
        const params = this.router.getCurrentNavigation().extras.state;
        console.log(params.dateline)

        this.datetime = params.datetime;
        this.sender = params.sender;
        this.receiver = params.receiver;
        this.vehicle = params.vehicle;
        this.price = params.price;
      }
  }



}
