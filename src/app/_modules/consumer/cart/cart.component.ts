import { Component, OnInit } from '@angular/core';
import { CartDetails } from 'src/app/_models/cartDetails/cartDetails.model';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { CartService } from 'src/app/_services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartdetails: CartDetails[];
  constructor(private cartService: CartService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getcartDetails();
  }
  getcartDetails() {
    console.log("From Get CartDetails", this.authService.getUserInfo().ConsumerId);
    let consumerId = this.authService.getUserInfo().ConsumerId;


    this.cartService.GetCartDetails(consumerId).subscribe(data => {
      console.log("From cartdata details", data);
      this.cartdetails = data as CartDetails[];
      console.log("From cart details", this.cartdetails);

    })
  }

}
