import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from 'src/assets/resources/product.data';
import { ApiService } from '../common/api.service';
import { Generic } from 'src/app/_models/generic/generic.model';



@Injectable({
  providedIn: 'root',
})
export class ProductService {

  public apiPath = "product/"

  constructor(private api: ApiService,
              ) { }
              getAllGenericName(){

               return this.api.get<Generic[]>(`${this.apiPath}getAllGenericName`);
                
}
}
