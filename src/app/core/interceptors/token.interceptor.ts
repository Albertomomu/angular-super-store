import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'skfnhwsdjkgbw32563246YKJDSVB'
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: ` Bearer ${token}`,
          "x-origin": "web",
          "x-lang": "es"
        }
      })
    }
    return next.handle(request);
  }
}
