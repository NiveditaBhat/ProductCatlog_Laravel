import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
addProdClicked: Boolean =  false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddProductClicked() {
    this.addProdClicked = true;
this.router.navigate(['/product/new']);
  }
}
