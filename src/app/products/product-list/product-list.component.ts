import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList: Product[] = [];
filteredProdList: Product[] ;
EditVisibility = '';
editClicked: Boolean;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
this.productService.getProducts();
this.productService.getProductsChangedListener().subscribe((changedProducts) => {
this.productList = changedProducts.products;
this.filteredProdList = this.productList;
});
  }

  OnProdDblClicked(id) {
  this.editClicked = false;
this.EditVisibility = id;
  }

  onProdEdit(product){
    this.editClicked = true;
    this.router.navigate(['/product', product.id]);
  }

  onListFiltered(filteredList) {
    this.filteredProdList = filteredList;
  }


}
