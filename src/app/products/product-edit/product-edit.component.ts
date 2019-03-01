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
editableProd = {'id': '' ,'name':'','price':0,'color':''};
editMode:Boolean = false;
cancelClicked: Boolean = false;
  constructor(private productService: ProductService, private router:Router, private activeRoute: ActivatedRoute,
    private modalService: ModalService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params)=>{
      this.editMode = true;
const prodId = params['id'];
const prod = this.productService.getProduct(prodId);
this.editableProd.name = prod[0].name;
this.editableProd.color = prod[0].color;
this.editableProd.price = prod[0].price;
this.editableProd.id = prod[0].id;
    });
  }

  canDeactivate(): Observable<boolean> | boolean {

    if (this.cancelClicked && this.prodEditForm.dirty) {

        return this.modalService.confirm('Discard Changes for Product Edit ?');
    }
    return true;
}

  onProdFormSubmit(form: NgForm) {
const product = new Product(this.editableProd.id, this.editableProd.name,this.editableProd.price, this.editableProd.color);
this.productService.updateProduct(product);
  }

  OnCancelClicked(){
    this.cancelClicked = true;
    this.router.navigate(['/']);
  }
}
