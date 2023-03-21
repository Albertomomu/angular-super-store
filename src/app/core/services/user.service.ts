import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, of, map, mergeMap, tap } from 'rxjs'

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
    const url = `${this.baseUrl}/api`
    return this.http.get(url).pipe(
      tap(x => console.log('avisar a google analytics')),
      // Tap no transforma datos
      // me estoy cargando el array de manera fake, veremos otros operadores para juntar array
      mergeMap((user: any) => user.results),
      map((user: any) => ({
        'name': user.name,
        'login': user.login,
        'picture': user.picture
      }))
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