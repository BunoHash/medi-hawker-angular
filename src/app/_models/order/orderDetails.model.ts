export class OrderDetails {
  OrderDetailsId: number;
  OrderId: number;
  ProductId?: number;
  PurchaseCount?: number;
  TotalPrice?: number;
  UnitPrice: number;
  CreatedOn?: Date;
  CreatedBy?: number;
  Address: string;
  Phone: string;
}