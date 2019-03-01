import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from '../../shared/modal.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
@ViewChild('productEditForm') prodEditForm:any;
editableProd:Product;
editMode:Boolean = false;
cancelClicked: Boolean = false;
  constructor(private productService: ProductService, private router:Router, private activeRoute: ActivatedRoute,
    private modalService: ModalService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params)=>{
      this.editMode = true;
const prodId = params['id'];
const prod = this.productService.getProduct(prodId);
this.editableProd = prod[0];
    });
  }

  canDeactivate(): Observable<boolean> | boolean {

    if (this.cancelClicked && this.prodEditForm.dirty) {

        return this.modalService.confirm('Discard Changes for Product Edit ?');
    }
    return true;
}

  onProdFormSubmit(form: NgForm) {
  /*  const newProduct = {'name': form.form.value.prodName, 'price': form.form.value.prodPrice, 'color': form.form.value.prodColor};
this.productService.addProduct(newProduct);*/
const product = new Product(this.editableProd.id, this.editableProd.name,this.editableProd.price, this.editableProd.color);
this.productService.updateProduct(product);
  }

  OnCancelClicked(){
    this.cancelClicked = true;
    this.router.navigate(['/']);
  }
}
