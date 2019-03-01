import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import {Routes, RouterModule, Router} from '@angular/router';
import { CanDeactivateGuard } from './products/can-deactivate-guard.service';

const route: Routes = [
  {path: '', component: ProductsComponent, children: [
    {path: 'productList', component: ProductListComponent},
    {path: 'product/new', component: ProductEditComponent},
    {path: 'product/:id', component: ProductEditComponent, canDeactivate: [CanDeactivateGuard]}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
