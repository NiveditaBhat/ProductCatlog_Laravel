
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable()
export class ProductService {
private productList: Product[];
private backendUrl = 'http://localhost:8000/';
private productsChanged = new Subject<{products: Product[]}>();
  constructor(private http: HttpClient, private router: Router){

  }

getProductArray(){
  return this.productList.slice();
}


addProduct(newProduct) {
const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
const options = { headers: headers };
  this.http.post<{message: string, product:any}>(this.backendUrl + 'api/product', newProduct).subscribe(responseData => {
    console.log(responseData);
    this.router.navigate(['/']);

    }, error => {
console.log(error);
    });
}

getProducts(){
 return this.http.get<{message: string, product}>(this.backendUrl + 'api/product')
 .subscribe((response) => {
   this.productList = [];
  response.product.forEach((obj,i) => {
    this.productList.push({'id':obj.id,'name':obj.name,'color':obj.color,'price':obj.price});
  });
  this.productsChanged.next({products: this.productList});
  }, error =>{
    console.log(error);
  });
}

getProductsChangedListener() {
  return this.productsChanged.asObservable();
 }


}
