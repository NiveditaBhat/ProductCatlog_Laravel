import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit() {
  }

  onProdFormSubmit(form: NgForm) {
    const newProduct = {'name': form.form.value.prodName, 'price': form.form.value.prodPrice, 'color': form.form.value.prodColor};
this.productService.addProduct(newProduct);
  }

  OnCancelClicked(){
    this.router.navigate(['/']);
  }
}
