import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportDashboardComponent } from './transport-dashboard/transport-dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './transport.route';



@NgModule({
  declarations: [TransportDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[],
  bootstrap:[]
})
export class TransportModule { 

  constructor(){
    console.log("transport module initiated!");
  }
}
