import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyDashboardComponent } from './pharmacy-dashboard/pharmacy-dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './pharmacy.route';



@NgModule({
  declarations: [PharmacyDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PharmacyModule { }
