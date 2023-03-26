import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthModule } from './core/auth/auth.module';
import { MaterialModule } from './shared/modules/material.module';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ErrorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    MaterialModule,
    UsersModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
