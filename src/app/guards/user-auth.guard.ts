import { UserLoginService } from './../services/user-login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  
  constructor(private service:UserLoginService,private router:Router) {}
  
  canActivate():boolean{
    if(this.service.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/user-login']);
      return false;
    }
  }
  
}
