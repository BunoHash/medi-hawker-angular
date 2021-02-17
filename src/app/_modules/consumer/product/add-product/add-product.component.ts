import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { cwd } from 'process';
import { Generic } from 'src/app/_models/generic/generic.model';
import { Manufacturer } from 'src/app/_models/manufacturer/manufacturer.model';
import { ManufacturerService } from 'src/app/_services/manufacturer/manufacturer.service';
import { ProductService } from 'src/app/_services/products/products.service';


@Component({
  selector: 'con-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: []
})
export class AddProductComponent implements OnInit {

  @Input() text: string;
 
  selectedManufacturer:Manufacturer;
  manufacturerList: Manufacturer[];

  selectedGenericName:Generic;
  genericNameList: Generic[];

  constructor(
    private manufacturerService:ManufacturerService,
    private productService : ProductService
    
  ) { }

  ngOnInit(): void {
    this.manufacturerService.getAllManufacturer().subscribe(data=>{
      console.log(data);
      
      this.manufacturerList=data;

    this.productService.getAllGenericName().subscribe(data=>{
      console.log(data);

    this.genericNameList=data;
      
    })


    });
  }


}
