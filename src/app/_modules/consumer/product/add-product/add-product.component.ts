import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Manufacturer } from 'src/app/_models/manufacturer/manufacturer.model';
import { ManufacturerService } from 'src/app/_services/manufacturer/manufacturer.service';


@Component({
  selector: 'con-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: []
})
export class AddProductComponent implements OnInit {

  @Input() text: string;
 
  selectedManufacturer:Manufacturer;
  manufacturerList: Manufacturer[];

  constructor(
    private manufacturerService:ManufacturerService
  ) { }

  ngOnInit(): void {
    this.manufacturerService.getAllManufacturer().subscribe(data=>{
      console.log(data);
      
      this.manufacturerList=data;

    });
  }


}
