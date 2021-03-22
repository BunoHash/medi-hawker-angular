import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Cart } from "src/app/_models/cart/cart.model";
import { CartDetails } from "src/app/_models/cartDetails/cartDetails.model";
import { ApiService } from "../common/api.service";

@Injectable({
  providedIn: 'root',
})

export class CartService {
  public apiPath = "cart/"

  cartItemSubject = new BehaviorSubject<CartDetails[]>([]);
  lastcartItem$ = this.cartItemSubject.asObservable();

  constructor(private api: ApiService,
  ) { }

  public AddToCart(cart: Cart): Observable<boolean> {
    return this.api.post<boolean>(`${this.apiPath}addToCart`, cart);
  }
  public GetCartDetails(consumerId) {
    return this.api.get<CartDetails[]>(`${this.apiPath}getCartDetails/${consumerId}`);


  }

  cartSavedProduct(status: CartDetails[]) {
    this.cartItemSubject.next(status);
  }
}