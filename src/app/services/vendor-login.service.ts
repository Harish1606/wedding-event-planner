import { Vendor } from './../models/Vendor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VendorLoginService {

  private url='http://localhost:8091/';
  constructor(private http:HttpClient,private router:Router) { }

  public login(vendor:Vendor):Observable<Object>{
    return this.http.post<Vendor>(this.url+'vendorlogin',vendor);
  }

  public change_password(id:number,vendor:Vendor):Observable<Object>{
    return this.http.put<Vendor>(this.url+'updatepassword/'+id,vendor);
  }

  loggedIn(){
    if(!!sessionStorage.getItem('vendor')){
      return true;
    }
    return false;
  }

  logoutUser(){
    sessionStorage.removeItem('vendor');
    this.router.navigate(['/vendor-login']);
  }
}
