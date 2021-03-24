export class Orders {
  OrderId: number;
  ConsumerId: number | null;
  TotalPrice: number | null;
  CreatedOn: Date | string | null;
  CreatedBy: number | null;
  ItemCount: number | null;
}