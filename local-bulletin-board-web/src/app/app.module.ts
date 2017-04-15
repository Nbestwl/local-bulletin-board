import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    //imports for animations

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { routes } from './app.router';

import { Auth } from './auth-service.service';
import { AuthGuard } from './auth-guard.service';
import { Ng2Bs3ModalModule } from '../../node_modules/ng2-bs3-modal/ng2-bs3-modal';    //import for modal 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    Ng2Bs3ModalModule
  ],
  providers: [
    Auth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
