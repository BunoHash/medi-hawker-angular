import { Routes } from "@angular/router";

import { CartComponent } from "./cart/cart.component";
import { ConsumerDashboardComponent } from "./consumer-dashboard/consumer-dashboard.component";
import { ConsumerShellComponent } from "./consumer-shell/consumer-shell.component";



export const routes: Routes = [

    {
        path: '', component: ConsumerShellComponent,
        children: [
            { path: 'dashboard', component: ConsumerDashboardComponent },
            { path: 'cart', component: CartComponent }
        ]

    },
    // {path:'new-route', component:ConsumerDashboardComponent},

]