import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/products/products.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'con-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: []
})
export class ProductListComponent implements OnInit {
  textData: string;
  // private _url:string="http://localhost:58908/api/consumer/allManufacturer"

  showDetailsButton: boolean = false;
  showMe: boolean = false;
  lastSavedProduct$: Observable<Product>;

  public response: { dbPath: '' };
  savedProductList: Product[];
  selectedProduct: Product;
  rootPath: string;
  // @Output() public onCreateFinished = new EventEmitter();


  constructor(private http: HttpClient,
    private productService: ProductService,
  ) {
    this.textData = "";

  }

  ngOnInit(): void {
    this.lastSavedProduct$ = this.productService.savedProduct$;
    this.lastSavedProduct();

    this.rootPath = environment.imageURL;
    this.getProductList();
  }
  AddItem() {

    this.showMe = !this.showMe


  }
  DetailsButton() {

    this.showDetailsButton = !this.showDetailsButton
    console.log("details button clicked");



  }

  public uploadFinished = (event) => {
    this.response = event;
    console.log("from UplaodFinished", event)
  }
  lastSavedProduct() {
    this.lastSavedProduct$.subscribe(data => {

      console.log('From Product List product->', data);
      if (this.savedProductList) {

        if (data.ImgPath == null || data.ImgPath == undefined) {

          data.ImgPath = environment.defaultImage;

        }
        else {
          data.ImgPath = this.rootPath + data.ImgPath;
        }
        this.savedProductList.splice(0, 0, data);
      }


    });
  }
  getProductList() {
    this.productService.getSavedProducts().subscribe(data => {
      console.log(data);
      this.savedProductList = data;
      this.savedProductList.map(x => {

        if (x.ImgPath == null || x.ImgPath == undefined) {
          x.ImgPath = environment.defaultImage;
        }

        else {
          x.ImgPath = this.rootPath + x.ImgPath
        }
        return x;
      });


    })
  }


}
