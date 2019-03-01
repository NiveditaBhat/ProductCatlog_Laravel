import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
editProdClicked: Boolean =  false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEditClicked(){
    this.editProdClicked = true;
  }

  onAddProductClicked() {
    this.editProdClicked = true;
this.router.navigate(['/product/new']);
  }
}
