import { Injectable }             from '@angular/core';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot }    from '@angular/router';
import { CanActivate }            from '@angular/router';
import { Auth }                   from './auth-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: Auth, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.auth.authenticated()){
    	console.log("AuthGuard Passed");
    	return true;
    } else {
      console.log("AuthGuard Blocked");
      this.router.navigate(['/']);		//if access is bloacked, redirect to the home page
      return false;
    }
  }
}