import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  productsList = [];

  constructor(private localstorage: LocalStorageService,
              private productsService: ProductsService){}

  ngOnInit(){
    const keyname = 'userList'
    const value = 'alberto'
    this.localstorage.setItem({keyname, value})
    this.getProductsList();
  }

  getProductsList(){
    this.productsService.getProductsList().subscribe(productList => {
      this.productsList = productList;
    })
  }

  onGetLocalStorage(){
    const keyname = "userList"
    this.productsList = [
      {
        title: this.localstorage.getItem({keyname})
      }
    ]
  }
}
