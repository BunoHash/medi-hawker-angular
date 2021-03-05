import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cwd } from 'process';
import { BehaviorSubject } from 'rxjs';
import { Generic } from 'src/app/_models/generic/generic.model';
import { Manufacturer } from 'src/app/_models/manufacturer/manufacturer.model';
import { Product } from 'src/app/_models/product/product.model';
import { ManufacturerService } from 'src/app/_services/manufacturer/manufacturer.service';
import { ProductService } from 'src/app/_services/products/products.service';


@Component({
  selector: 'con-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: []
})
export class AddProductComponent implements OnInit {


  public progress: number;
  public message: string;
  public response: { dbPath: '' };

  @Output() public onUploadFinished = new EventEmitter();
  @Input() showMeAction: any;
  @Input() text: string;
  @Output() someEvent = new EventEmitter();

  selectedManufacturer: Manufacturer;

  manufacturerList: Manufacturer[];

  selectedGenericName: Generic;
  genericNameList: Generic[];
  newProductModel: Product;



  constructor(
    private manufacturerService: ManufacturerService,
    private productService: ProductService,
    private toastr: ToastrService,
    private http: HttpClient


  ) { }

  ngOnInit(): void {
    this.initializeNewProductData();
    this.getAllManufacturer();
    this.getAllGenericName();
  }

  initializeNewProductData() {
    this.newProductModel = new Product();
  }
  getAllGenericName() {
    this.productService.getAllGenericName().subscribe(data => {
      console.log(data);
      this.genericNameList = data;
    })
  }
  getAllManufacturer() {
    this.manufacturerService.getAllManufacturer().subscribe(data => {
      console.log(data);

      this.manufacturerList = data;
    });
  }

  saveRegisterProduct(product: Product) {
    this.productService.saveProduct(product).subscribe(data => {
      console.log(data);

      this.productService.changeSavedProduct(product);
      this.toastr.success('Product Added Successfully !');

    })
  }

  saveProduct() {
    var product = new Product();

    product.Name = this.newProductModel.Name;
    product.PaxCount = this.newProductModel.PaxCount;
    product.SellingPrice = + this.newProductModel.SellingPrice;
    product.BuyingPrice = +this.newProductModel.BuyingPrice;
    product.Description = this.newProductModel.Description;

    product.ManufacturerId = this.selectedManufacturer.ManufacturerId;
    product.GenericId = this.selectedGenericName.Id;


    // product.ImgPath = this.response.dbPath;

    this.saveRegisterProduct(product);

    this.selectedGenericName = null;
    this.selectedManufacturer = null;
    this.initializeNewProductData();


  }
  closeMe() {

    this.showMeAction();


  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post('http://localhost:58908/api/Upload/uploadProductImage', formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }
}
