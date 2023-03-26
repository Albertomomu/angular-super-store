import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // CUIDADO, ESTE BORRA TODO EL LOCALSTORAGE, SI TUVIERAMOS VARIABLES DE SESION SE BORRARIAN TAMBIEN
  clear(){
    localStorage.clear()
  }

  setItem({keyname, value}){
    localStorage.setItem(keyname, JSON.stringify(value))
  }

  getItem({keyname}){
    return JSON.parse(localStorage.getItem(keyname))
  }

  removeItem({keyname}){
    localStorage.removeItem(keyname)
  }
}
