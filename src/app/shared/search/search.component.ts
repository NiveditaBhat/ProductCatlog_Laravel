import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../products/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filteredList;
  @Input() list;
  @Output() filteredListEmitter = new EventEmitter();

  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredList = this.filterProdproductList(value);
    this.filteredListEmitter.emit(this.filteredList);
  }
  constructor() { }

  ngOnInit() {
  }

  filterProdproductList(searchString: string) {
  /*  if (searchString == null) {
      return this.list;
    }

    return this.list.filter(function(item){
      return item.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
      item.color.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
      item.price.toString().toLowerCase().indexOf(searchString.toLowerCase()) > -1;
    });*/
    if (searchString) {
      return this.list.filter(item => {
          const filter = Object.keys(item);
          return filter.some(
              key => item[key].toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1
          );
      });
  }

  return this.list;
}

}
