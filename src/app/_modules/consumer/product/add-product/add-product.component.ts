import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cwd } from 'process';
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

  // public txtName = "";
  // public txtPaxCount = "";
  // public txtSellingPrice = "";
  // public txtBuyingPrice = "";
  // public txtDescription = "";
  // public txtGenericId = "";

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

    this.saveRegisterProduct(product);

    this.selectedGenericName = null;
    this.selectedManufacturer = null;
    this.initializeNewProductData();


  }
  closeMe() {

    this.showMeAction();


  }


}
