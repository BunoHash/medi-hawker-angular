import { Routes } from "@angular/router";

import { CartComponent } from "./cart/cart.component";
import { ConsumerDashboardComponent } from "./consumer-dashboard/consumer-dashboard.component";
import { ConsumerShellComponent } from "./consumer-shell/consumer-shell.component";
import { OrderComponent } from "./order/order.component";




export const routes: Routes = [

    {
        path: '', component: ConsumerShellComponent,
        children: [
            { path: 'dashboard', component: ConsumerDashboardComponent },
            { path: 'cart', component: CartComponent },
            { path: 'order', component: OrderComponent }
        ]

    },
    // {path:'new-route', component:ConsumerDashboardComponent},

]