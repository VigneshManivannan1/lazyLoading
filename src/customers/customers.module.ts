import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';


@NgModule({
  declarations: [
    CustomerDetailComponent,
    CustomerListComponent ,CustomerComponent
  ],
  imports: [
    CommonModule, CustomerRoutingModule
  ]
})
export class CustomersModule { }
