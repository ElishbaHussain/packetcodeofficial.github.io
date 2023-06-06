import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private service: OrderDetailsService) {}
  foodData: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.foodData = this.service.foodDetails;
  }
}
