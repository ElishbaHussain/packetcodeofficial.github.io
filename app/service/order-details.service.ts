import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  constructor() {}

  foodDetails = [
    {
      id: 1,
      foodName: 'Burger',
      foodDetails: 'Grilled Burger',
      foodPrice: 200,
      foodImg: '../../../assets/img/burger.png',
    },
    {
      id: 2,
      foodName: 'Lasagnia',
      foodDetails: 'BBQ Lasagnia',
      foodPrice: 200,
      foodImg: '../../../assets/img/Lasagna.png',
    },

    {
      id: 3,
      foodName: 'Pasta',
      foodDetails: 'Tandoori Pasta',
      foodPrice: 200,
      foodImg: '../../../assets/img/pasta.png',
    },
    {
      id: 4,
      foodName: 'Pizza',
      foodDetails: 'Tikka Pizza',
      foodPrice: 200,
      foodImg: '../../../assets/img/pizza.png',
    },
    {
      id: 5,
      foodName: 'Spaghatti',
      foodDetails: 'Chicken Spaghetti',
      foodPrice: 200,
      foodImg: '../../../assets/img/spag.png',
    },
    {
      id: 6,
      foodName: 'Stakes',
      foodDetails: 'Chicken Stake',
      foodPrice: 200,
      foodImg: '../../../assets/img/stakes.png',
    },
    {
      id: 7,
      foodName: 'Salad',
      foodDetails: 'Salad',
      foodPrice: 200,
      foodImg: '../../../assets/img/salad.png',
    },
    {
      id: 8,
      foodName: 'Stakes',
      foodDetails: 'Chicken Stake',
      foodPrice: 200,
      foodImg: '../../../assets/img/rice.png',
    },
  ];
}
