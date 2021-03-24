import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/_models/cart/cart.model';
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
  quantity: number = 1;
  i: number;


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

  // totalPrice(cartDetail: CartDetails) {
  //   cartDetail.TotalPrice = cartDetail.ProductCount * cartDetail.SellingPrice;
  //   console.log('totalPrice', cartDetail.TotalPrice);

  // }
  plus(cartDetail: CartDetails) {

    if (cartDetail.ProductCount != 20) {
      cartDetail.ProductCount += 1;
    }




  }
  minus(cartDetail: CartDetails) {
    if (cartDetail.ProductCount != 1) {


      cartDetail.ProductCount -= 1;

    }
  }
  checkOut() {
    console.log('checkOut', this.cartdetails);

    this.cartdetails.find(x => {
      x.TotalPrice = x.ProductCount * x.SellingPrice;
    })
    this.cartService.cartSavedProduct(this.cartdetails);
    console.log('checkOut 2', this.cartdetails);





  }

}
