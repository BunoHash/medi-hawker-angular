import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'con-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: []
})
export class ProductListComponent implements OnInit {
  textData: string;
  // private _url:string="http://localhost:58908/api/consumer/allManufacturer"
  @Input() showMe: boolean = false;


  constructor(private http: HttpClient) {
    this.textData = "";

  }

  ngOnInit(): void {
  }
  AddItem() {

    this.showMe = !this.showMe


  }
  // getAllManufacturer(){
  //   return this.http.get(this._url);
  // }
}
