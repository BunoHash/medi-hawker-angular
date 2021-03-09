import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/products/products.service';



@Component({
  selector: 'con-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: []
})
export class ProductListComponent implements OnInit {
  textData: string;
  // private _url:string="http://localhost:58908/api/consumer/allManufacturer"
  showMe: boolean = false;
  public response: { dbPath: '' };
  // @Output() public onCreateFinished = new EventEmitter();


  constructor(private http: HttpClient
  ) {
    this.textData = "";

  }

  ngOnInit(): void {
  }
  AddItem() {

    this.showMe = !this.showMe


  }


  public uploadFinished = (event) => {
    this.response = event;
    console.log("from UplaodFinished", event)
  }

  // public createImgPath = (serverPath: string) => {
  //   return `https://localhost:58908/${serverPath}`;
  // }
  // savedImagePath = '';
  // public onCreate() {
  //   var product = new Product();
  //   product.ImgPath = this.response.dbPath;
  //   console.log("Oncreate", this.response.dbPath);

  //   this.productService.saveProduct(product).subscribe(data => {
  //     console.log(data);


  //   })




  // }

}
