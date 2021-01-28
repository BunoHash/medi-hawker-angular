import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'con-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: []
})
export class ProductListComponent implements OnInit {
  textData: string;
  AddItem() {

  }
  constructor() {
    this.textData = "";
  }

  ngOnInit(): void {
  }

}
