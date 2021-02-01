import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'con-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: []
})
export class AddProductComponent implements OnInit {

  @Input() text: string;
  
  // @Input() callbackFunction: (args: any) => void;
  constructor() { }

  ngOnInit(): void {
  }

}
