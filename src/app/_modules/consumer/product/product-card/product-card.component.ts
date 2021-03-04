import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/products/products.service';

@Component({
  selector: 'con-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: []
})
export class ProductCardComponent implements OnInit {

  savedProductList: Product[];
  constructor(
    private productService: ProductService

  ) { }

  ngOnInit(): void {
    this.getSavedProducts();
  }

  getSavedProducts() {
    this.productService.getSavedProducts().subscribe(data => {
      console.log(data);
      this.savedProductList = data;


    })
  }
}
