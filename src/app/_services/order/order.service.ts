import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConsumerOrderModel } from "src/app/_models/order/consumerOrderModel.model";
import { ApiService } from "../common/api.service";

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public apiPath = "order/"
  /**
   *
   */
  constructor(private api: ApiService) {


  }
  public orderDetails(consumerOrderModel: ConsumerOrderModel): Observable<boolean> {
    return this.api.post<boolean>(`${this.apiPath}orderDetails`, consumerOrderModel);
  }
}