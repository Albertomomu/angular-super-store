import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'https://dummyjson.com'

  constructor(private http: HttpClient,
              private localStorage: LocalStorageService
              ) { }

  getProductsList(){
    const url = `${this.baseUrl}/products`
    const keyname = 'productList'
    const productList = this.localStorage.getItem({keyname})
    if(productList?.length) return of(productList)
    return this.http.get(url).pipe(
      map(data =>  data['products']),
      tap(data => {
        const value = data
        this.localStorage.setItem({keyname, value});
      })
      )
  }
}

