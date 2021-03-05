import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/products/products.service';

@Component({
  selector: 'con-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: []
})
export class ProductCardComponent implements OnInit {

  savedProductList: Product[] = [];
  lastSavedProduct$: Observable<Product>;
  constructor(
    private productService: ProductService

  ) { }

  ngOnInit(): void {
    this.lastSavedProduct$ = this.productService.savedProduct$;

    this.lastSavedProduct$.subscribe(data => {

      console.log('From Product List product->', data);
      if (this.savedProductList) {
        this.savedProductList.splice(0, 0, data);
      }


    });
    this.getSavedProducts();


  }

  getSavedProducts() {
    this.productService.getSavedProducts().subscribe(data => {
      console.log(data);
      this.savedProductList = data;


    })
  }
}
