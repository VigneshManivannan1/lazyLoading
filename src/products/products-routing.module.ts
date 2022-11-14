import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';

const productRoutes: Routes = [
  {
    path: '', 
    component: ProductsComponent,
    children: [
      { path: ':id/detail', component: ProductDetailComponent },
      { path:'', component: ProductListComponent,  }
    ]
  }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(productRoutes)
      ],
  declarations: [ProductListComponent, ProductDetailComponent ,ProductsComponent ]
})
export class ProductsRoutingModule { }
