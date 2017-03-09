import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';

export const router: Routes = [
  { path: '', redirectTo: 'user-login', pathMatch: 'full'},
  { path: 'user-login', component: UserLoginComponent },
  { path: 'home', component: HomeComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
