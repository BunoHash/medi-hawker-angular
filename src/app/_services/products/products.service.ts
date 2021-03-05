import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { ApiService } from '../common/api.service';
import { Generic } from 'src/app/_models/generic/generic.model';
import { Product } from 'src/app/_models/product/product.model';



@Injectable({
  providedIn: 'root',
})
export class ProductService {

  public apiPath = "product/"

  productSubject = new BehaviorSubject<Product>({} as Product);
  savedProduct$ = this.productSubject.asObservable();

  changeSavedProduct(status: Product) {
    this.productSubject.next(status);
  }

  constructor(private api: ApiService,
  ) { }

  public getAllGenericName() {
    return this.api.get<Generic[]>(`${this.apiPath}getAllGenericName`);

  }
  public saveProduct(product: Product): Observable<boolean> {
    return this.api.post<boolean>(`${this.apiPath}saveProduct`, product);
  }

  public getSavedProducts() {
    return this.api.get<Product[]>(`${this.apiPath}getSavedProduct`);
  }

}
