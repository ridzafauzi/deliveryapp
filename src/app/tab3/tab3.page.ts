import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  datetime: string = "Sept 3 09:40";
  sender: string = "86 Jalan Ara SD 8/4, Bandar Sri Damansara, 52200 Kuala Lumpur, Malaysia";
  receiver: string = "Lengkok BSC 1/1 Presint 1, Bandar Seri Coalfields, 47000 Sungai Buloh, Selangor, Malaysia";
  vehicle: string = "Motorcyle";
  price: string = "RM37.00";


  constructor(public nav: NavController) {}

  updatetab1() {
    let params: any = {
      datetime: this.datetime,
      sender: this.sender,
      receiver: this.receiver,
      vehicle: this.vehicle,
      price: this.price
      
    }
    this.nav.navigateForward('/tabs/tab1', { state: params }); // params to pass object/array
  }

}
