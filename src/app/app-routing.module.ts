import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersModule } from 'src/customers/customers.module';
import { HomeComponent } from 'src/home/home/home.component';
import { ProductsModule } from 'src/products/products.module';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => CustomersModule,
  },
  {
    path:'products',
    loadChildren: () => ProductsModule,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations:[HomeComponent],
  providers: []
})
export class AppRoutingModule { }
