import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {



  constructor(

  ) { }

  ngOnInit(): void {
  }


}
