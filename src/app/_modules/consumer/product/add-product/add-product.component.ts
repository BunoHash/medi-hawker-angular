import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { provideRoutes } from '@angular/router';
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

  public txtName = "";
  public txtPaxCount = "";
  public txtSellingPrice = "";
  public txtBuyingPrice = "";
  public txtDescription = "";
  public txtGenericId = "";

  @Input() text: string;

  selectedManufacturer: Manufacturer;
  manufacturerList: Manufacturer[];

  selectedGenericName: Generic;
  genericNameList: Generic[];

  constructor(
    private manufacturerService: ManufacturerService,
    private productService: ProductService

  ) { }

  ngOnInit(): void {
    this.manufacturerService.getAllManufacturer().subscribe(data => {
      console.log(data);

      this.manufacturerList = data;

      this.productService.getAllGenericName().subscribe(data => {
        console.log(data);
        this.genericNameList = data;
      })
    });
  }
  saveRegisterProduct(product: Product) {
    this.productService.saveProduct(product).subscribe(data => { console.log(data) })
  }
  saveProduct() {
    var product = new Product();

    product.Name = this.txtName;
    product.PaxCount = this.txtPaxCount;
    product.SellingPrice = + this.txtSellingPrice;
    product.BuyingPrice = +this.txtBuyingPrice;
    product.Description = this.txtDescription;

    product.ManufacturerId = this.selectedManufacturer.ManufacturerId;
    product.GenericId = this.selectedGenericName.Id;

    this.saveRegisterProduct(product);
    this.txtName = '';
    this.txtPaxCount = '';
    this.txtSellingPrice = '';
    this.txtBuyingPrice = '';
    this.txtDescription = '';
    this.selectedGenericName = null;
    this.selectedManufacturer = null;


  }


}
