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
  showMe: boolean = false;
  public response: { dbPath: '' };

  constructor(private http: HttpClient) {
    this.textData = "";

  }

  ngOnInit(): void {
  }
  AddItem() {

    this.showMe = !this.showMe


  }
  public uploadFinished = (event) => {
    this.response = event;
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:58908/${serverPath}`;
  }
  // getAllManufacturer(){
  //   return this.http.get(this._url);
  // }
}
