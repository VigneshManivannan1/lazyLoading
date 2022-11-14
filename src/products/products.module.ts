import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule , ProductsRoutingModule 
  ]
})
export class ProductsModule { }
