import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';

import { Ng2Bs3ModalModule } from '../../node_modules/ng2-bs3-modal/ng2-bs3-modal';    //import for modal 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    //imports for animations
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDzZldMOFTglLSeUR9jjHcrDmt-AhRiU2A",
  authDomain: "local-bulletin-board.firebaseapp.com",
  databaseURL: "https://local-bulletin-board.firebaseio.com",
  storageBucket: "local-bulletin-board.appspot.com",
  messagingSenderId: "788155777270"
};

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }
];

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
    Ng2Bs3ModalModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
