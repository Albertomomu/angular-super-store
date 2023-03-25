import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, delay, Observable, retryWhen, take, tap, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'GET') {
      retryWhen(errors =>
        errors.pipe(
          delay(1000),
          tap((err) => console.warn('Reintentando')),
          take(5)
        )
      ),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            // Si el error es un error 404, hacemos algo diferente
            console.error("Error 404:", error);
            // hacer algo diferente
          } else if (error.status === 500) {
            // Si el error es un error 500, hacemos algo diferente
            console.error("Error 500:", error);
            // hacer algo diferente
          } else {
            // Si es otro tipo de error, simplemente devolvemos el error
            return throwError(error);
          }
          return throwError(error);
        })
    }
    return next.handle(request);
  }
}
