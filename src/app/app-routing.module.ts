import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import {Routes, RouterModule, Router} from '@angular/router';
import { CanDeactivateGuard } from './products/can-deactivate-guard.service';

const route: Routes = [
  {path: '', redirectTo: 'product/list', pathMatch:'full'},
  {path: 'product/:id', component: ProductEditComponent, outlet:'editProd', canDeactivate: [CanDeactivateGuard]},
  {path: 'product/list', component: ProductListComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
