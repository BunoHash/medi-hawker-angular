import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/_models/cart/cart.model';
import { CartDetails } from 'src/app/_models/cartDetails/cartDetails.model';
import { CartService } from 'src/app/_services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  lastcartItem$: Observable<CartDetails[]>;

  allCartItem: CartDetails[];


  constructor(private cartService: CartService
  ) { }

  ngOnInit() {

    this.cartService.lastcartItem$.subscribe(data => {
      console.log('lastcartItem', (data));
      this.allCartItem = data;










    })


  }
  allCartItems() {
    console.log('allCartItem', this.allCartItem);


  }
  placeOrder() {
    console.log(" placeOrder clicked");

  }


  Cancel() {
    console.log(" Cancel clicked");
  }



}




