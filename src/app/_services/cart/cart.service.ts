import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cart } from "src/app/_models/cart/cart.model";
import { ApiService } from "../common/api.service";

@Injectable({
  providedIn: 'root',
})

export class CartService {
  public apiPath = "cart/"

  constructor(private api: ApiService,
  ) { }

  public AddToCart(cart: Cart): Observable<boolean> {
    return this.api.post<boolean>(`${this.apiPath}addToCart`, cart);
  }
}