import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/_models/cart/cart.model';
import { Product } from 'src/app/_models/product/product.model';
import { CartService } from 'src/app/_services/cart/cart.service';
import { ProductService } from 'src/app/_services/products/products.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() selectedProduct: Product
  newCartModel: Cart;

  constructor(
    private cartService: CartService

  ) { }

  ngOnInit(): void {
  }
  // SaveAddToCart(cart: Cart) {
  //   this.cartService.AddToCart(cart).subscribe(data => {
  //     console.log(data);

  //   })

  // }
  // AddToCart() {

  // }

}
