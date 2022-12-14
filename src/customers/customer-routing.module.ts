import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerComponent } from './customer.component';


const routes: Routes = [ 
  { 
     path: '', component: CustomerComponent ,
    children: [
      { path:':id/detail', component: CustomerDetailComponent },
      { path: '', component: CustomerListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }