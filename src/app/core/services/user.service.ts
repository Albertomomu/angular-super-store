import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, of, map, mergeMap, tap, retry, delay, retryWhen, take } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://randomuser.me'

  constructor(private http: HttpClient) { }

  login({ email = '', password = '' }) {
    return from(['000', '001', '002'])
  }

  getProfileUser() {
    // para comprobarlo poner mal url
    const url = `${this.baseUrl}/api`
    return this.http.get(url).pipe(
      // Tap no transforma datos, se ejecuta solo cuando no da error
      tap(x => console.warn('avisar a google analytics')),
      // me estoy cargando el array de manera fake, veremos otros operadores para juntar array
      map((user: any) => user.results[0]),
      map((user: any) => ({
        'name': user.name,
        'login': user.login,
        'picture': user.picture
      })),
    );
  }
  getUserList() {
    // para comprobarlo poner mal url
    const url = `${this.baseUrl}/api?results=10`
    return this.http.get(url).pipe(
      tap(x => console.log('avisar a google analytics')),
      map((user: any) => user.results),
      // Hace 5 reintentos si es que recibe un error
      retry(5)
    );
  }
}

//FORMAS DE DECLARAR COSAS
/*
const userList = [{ name: "alberto" }, { name: "peludito" }];

    const userFormatedList = userList.find((user) => `hola, ${user.name}`);

    const userFormatedListv2 = userList.find((user) => {
      return `hola, ${user.name}`
    });

    const userFormatedListv3 = userList.find((user) => {
      return {
        'name': user.name
      }
    });

    const userFormatedListv4 = userList.find((user) => ({
        'name': user.name
    }));
*/