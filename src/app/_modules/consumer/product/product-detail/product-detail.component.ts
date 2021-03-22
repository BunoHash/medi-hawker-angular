import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Card } from 'primeng';
import { Cart } from 'src/app/_models/cart/cart.model';
import { Consumer } from 'src/app/_models/consumer/consumer.model';
import { Product } from 'src/app/_models/product/product.model';
import { TokenModel } from 'src/app/_models/token.model';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { CartService } from 'src/app/_services/cart/cart.service';
import { ProductService } from 'src/app/_services/products/products.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() selectedProduct: Product;
  chosenProduct: Product;

  consumer: Consumer;



  quantity: number = 1;
  i = 1;
  selectedConsumerInfo: Consumer;
  selectedConsumerId: number;
  totalPrice: number = 0;
  showMe: boolean = true;
  constructor(
    private cartService: CartService,
    private authService: AuthService

  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)

    if (!changes.firstChange) {
      this.quantity = this.i = 1;
      this.calculateTotalPrice();

    }
  }
  ngOnInit(): void {
    this.selectedConsumerInfo = this.authService.getUserInfo();
    if (this.selectedConsumerInfo) {
      this.selectedConsumerId = this.selectedConsumerInfo.ConsumerId;
    }
    this.calculateTotalPrice();
  }

  plus() {
    if (this.i != 20) {
      this.i++;
      this.quantity = this.i;
      this.calculateTotalPrice();
    }
  }
  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
      this.calculateTotalPrice();
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.selectedProduct.SellingPrice * this.quantity;
  }

  SaveAddToCart(cart: Cart) {
    this.cartService.AddToCart(cart).subscribe(data => {
      console.log(data);

    })

  }
  // check() {
  //   console.log("from check", this.selectedProduct);

  // }
  AddToCart() {

    var cart = new Cart();
    cart.ProductId = this.selectedProduct.ProductId;
    cart.SellingPrice = this.selectedProduct.SellingPrice;
    cart.ProductCount = this.quantity;
    cart.ConsumerId = this.selectedConsumerId;
    cart.TotalPrice = this.totalPrice;
    console.log('total price', this.totalPrice);


    // console.log("getdata", this.selectedConsumerId);
    // console.log('data',);


    // console.log(this.selectedProduct)
    this.SaveAddToCart(cart);
    this.quantity = this.i = 1;
    this.totalPrice = this.selectedProduct.SellingPrice;

    console.log(this.quantity);


  }
  closeDiv() {
    this.showMe = !this.showMe;

  }
  // AddToCart() {
  //   console.log("from Add to cart ", this.selectedProduct);
  //   this.cartItem = Object.assign(this.cartItem, this.selectedProduct);
  //   localStorage.setItem('CartItem', JSON.stringify(this.cartItem))
  //   // console.log(localStorage.getItem('CartItem'));

  // }

  // ngOnDestroy() {
  //   this.quantity = 1;
  // }
}
