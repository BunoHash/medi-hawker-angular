import { Component, OnInit,Input} from '@angular/core';



@Component({
  selector: 'con-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: []
})
export class ProductListComponent implements OnInit {
  textData: string;
  @Input() showMe:boolean =false;
  
  
  constructor() {
    this.textData = "";
  }

  ngOnInit(): void {
  }
  AddItem() {
    this.showMe=!this.showMe
  }
}
