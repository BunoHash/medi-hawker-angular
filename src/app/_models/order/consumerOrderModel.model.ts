import { OrderDetails } from "./orderDetails.model";
import { Orders } from "./orders.model";

export class ConsumerOrderModel {
  Orders: Orders;
  OrderDetails: OrderDetails[];
  consumerOrderModel: OrderDetails;

}