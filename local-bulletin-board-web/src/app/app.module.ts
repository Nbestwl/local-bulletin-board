import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';

import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth} from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    AUTH_PROVIDERS,
    Auth
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
