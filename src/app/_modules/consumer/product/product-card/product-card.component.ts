import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product/product.model';
import { CartService } from 'src/app/_services/cart/cart.service';
import { ProductService } from 'src/app/_services/products/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'con-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: []
})
export class ProductCardComponent implements OnInit {

  // savedProductList: Product[] = [];
  // lastSavedProduct$: Observable<Product>;
  rootPath = ''
  showDetailsButton: boolean = false;

  @Input() showButtonDetails = new EventEmitter();
  @Input() product: Product;


  constructor(
    private productService: ProductService,


  ) { }

  ngOnInit(): void {

    // this.rootPath = environment.imageURL;
    // this.lastSavedProduct$ = this.productService.savedProduct$;
    // this.lastSavedProduct();

    // this.getProductList();


  }

  // lastSavedProduct() {
  //   this.lastSavedProduct$.subscribe(data => {

  //     console.log('From Product List product->', data);
  //     if (this.savedProductList) {

  //       if (data.ImgPath == null || data.ImgPath == undefined) {

  //         data.ImgPath = environment.defaultImage;

  //       }
  //       else {
  //         data.ImgPath = this.rootPath + data.ImgPath;
  //       }
  //       this.savedProductList.splice(0, 0, data);
  //     }


  //   });
  // }

  // getProductList() {
  //   this.productService.getSavedProducts().subscribe(data => {
  //     console.log(data);
  //     this.savedProductList = data;
  //     this.savedProductList.map(x => {

  //       if (x.ImgPath == null || x.ImgPath == undefined) {
  //         x.ImgPath = environment.defaultImage;
  //       }

  //       else {
  //         x.ImgPath = this.rootPath + x.ImgPath
  //       }
  //       return x;
  //     });


  //   })
  // }
  showProductDetails(selectedProduct: Product) {

    this.showDetailsButton = !this.showDetailsButton
    console.log("details button clicked");



  }




}
