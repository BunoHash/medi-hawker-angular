import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/_models/cart/cart.model';
import { CartDetails } from 'src/app/_models/cartDetails/cartDetails.model';
import { ConsumerOrderModel } from 'src/app/_models/order/consumerOrderModel.model';
import { OrderDetails } from 'src/app/_models/order/orderDetails.model';
import { Orders } from 'src/app/_models/order/orders.model';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { CartService } from 'src/app/_services/cart/cart.service';
import { OrderService } from 'src/app/_services/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  lastcartItem$: Observable<CartDetails[]>;

  allCartItem: CartDetails[];
  allPrice = 0;
  public conPhone: string;
  public conAddress: string;


  constructor(private authService: AuthService, private cartService: CartService, private orderService: OrderService
  ) { }

  ngOnInit() {

    this.cartService.lastcartItem$.subscribe(data => {
      console.log('lastcartItem', (data));
      this.allCartItem = data;





      // this.priceForOrderTBL();
      // this.lol();










    })


  }
  allCartItems() {
    console.log('allCartItem', this.allCartItem);


  }

  placeOrder(consumerOrderModel: ConsumerOrderModel) {
    console.log(" placeOrder clicked");
    console.log('hahahhahaha', consumerOrderModel.OrderDetails);

    this.orderService.orderDetails(consumerOrderModel).subscribe(data => {
      console.log('placeOrder', data);

    })

  }

  priceForOrderTBL() {
    var totalCount = 0;

    this.allCartItem.map(x => {

      this.allPrice = totalCount += x.TotalPrice;
    })
    console.log('Price', this.allPrice);
  }
  saveOrderInfo() {
    var order = new Orders();

    var consumerOrderModel = new ConsumerOrderModel();

    order.ConsumerId = this.authService.getUserInfo().ConsumerId;
    order.TotalPrice = this.allPrice;
    order.ItemCount = this.allCartItem.length;
    // order.CreatedOn = new Date().getDay() + "/" + new Date().getDate() + "/" + new Date().getFullYear();
    order.CreatedBy = this.authService.getUserInfo().ConsumerId;


    let orderDetailsList: OrderDetails[] = []
    this.allCartItem.map(x => {
      let orderDetails = new OrderDetails();
      orderDetails.ProductId = x.ProductId
      console.log('ProductId', orderDetails.ProductId);

      orderDetails.PurchaseCount = x.ProductCount;
      orderDetails.TotalPrice = x.TotalPrice;
      console.log('TotalPrice fro order DTL', orderDetails.TotalPrice);

      orderDetails.UnitPrice = x.SellingPrice
      console.log('UnitPrice', orderDetails.UnitPrice);
      orderDetails.Address = this.conAddress;
      orderDetails.Phone = this.conPhone;
      // orderDetails.CreatedOn = new Date().getDay() + "/" + new Date().getDate() + "/" + new Date().getFullYear();
      orderDetails.CreatedBy = this.authService.getUserInfo().ConsumerId;

      orderDetailsList.push(orderDetails);
    });
    // console.log('ProductId', orderDetails.ProductId);

    // this.allCartItem.map(x => {

    // })
    // console.log('ProductId', orderDetails.ProductId);

    // this.allCartItem.map(x => {

    // })

    consumerOrderModel.Orders = order;
    consumerOrderModel.OrderDetails = orderDetailsList;


    this.placeOrder(consumerOrderModel);




  }
  // lol() {

  //   var order = new Orders();
  //   var orderDetails = new OrderDetails();
  //   var consumerOrderModel = new ConsumerOrderModel();
  //   this.allCartItem.map(x => {
  //     orderDetails.ProductId = x.ProductId
  //     console.log('ProductId', orderDetails.ProductId);
  //   })
  //   // console.log('ProductId', orderDetails.ProductId);

  // }



  Cancel() {
    console.log(" Cancel clicked");


  }



}






