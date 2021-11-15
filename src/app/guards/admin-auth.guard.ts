import { AdminLoginService } from './../services/admin-login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private service:AdminLoginService,private router:Router){}
  
  canActivate():boolean{
    if(this.service.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/admin-login']);
      return false;
    }
  }
  
}
