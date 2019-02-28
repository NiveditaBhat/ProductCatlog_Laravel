import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList: Product[] = [];
filteredProdList: Product[] ;

  constructor(private productService: ProductService) { }

  ngOnInit() {
this.productService.getProducts();
this.productService.getProductsChangedListener().subscribe((changedProducts) => {
this.productList = changedProducts.products;
this.filteredProdList = this.productList;
});
  }

  OnProductDbClicked(){
//this.prodEditFormVisibility = !this.prodEditFormVisibility;
  }

  onListFiltered(filteredList) {
    this.filteredProdList = filteredList;
  }


}
