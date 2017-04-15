import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  
  // Configure Auth0
  lock = new Auth0Lock('7EUgEHxwA6WUv2kw04qmT9tA5lYq61xq', '62lwang.auth0.com', {});

  constructor(public router: Router) {

    this
    .router
    .events
    .filter(event => event.constructor.name === 'NavigationStart')
    .filter(event => (/access_token|id_token|error/).test(window.location.search))
    .subscribe(() => {
      // Add callback for lock `authenticated` event
      this.lock.resumeAuth(window.location.hash, (error, authResult) => {
        if (error) return console.log(error);
        localStorage.setItem('id_token', authResult.idToken);
        //localStorage.setItem('profile', JSON.stringify(profile));
        console.log("The userID is : " + 'id_token');
        this.router.navigate(['/profile']);
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    console.log("Logout successsful");
  }

}
