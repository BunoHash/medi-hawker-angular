import { Component, EventEmitter, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Card } from 'primeng';
import { Cart } from 'src/app/_models/cart/cart.model';
import { Consumer } from 'src/app/_models/consumer/consumer.model';
import { Product } from 'src/app/_models/product/product.model';
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
  constructor(
    private cartService: CartService,


  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)

    if (!changes.firstChange)
      this.quantity = this.i = 1;
  }

  ngOnInit(): void {
  }

  plus() {
    if (this.i != 10) {
      this.i++;
      this.quantity = this.i;

    }
  }
  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
    }
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
    debugger
    var cart = new Cart();
    cart.ProductId = this.selectedProduct.ProductId;
    cart.SellingPrice = this.selectedProduct.SellingPrice;
    cart.ProductCount = this.quantity;
    let data = localStorage.getItem('token.User')
    let getdata = JSON.parse(localStorage.getItem('token'))
    console.log(getdata);






    // console.log(this.selectedProduct)
    this.SaveAddToCart(cart);
    this.quantity = this.i = 1;

    console.log(this.quantity);

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
