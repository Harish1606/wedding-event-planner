import { VendorLoginService } from './../services/vendor-login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorAuthGuard implements CanActivate {
  
  constructor(private service:VendorLoginService,private router:Router){}

  canActivate():boolean{
    if(this.service.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/vendor-login']);
      return false;
    }
  }
  
}
