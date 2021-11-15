import { Admin } from './../models/Admin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  private url='http://localhost:8091/';
  constructor(private http:HttpClient,private router:Router) { }

  public login(admin:Admin):Observable<Object>{
    return this.http.post<Admin>(this.url+'adminlogin',admin);
  }

  loggedIn(){
    if(!!sessionStorage.getItem('admin')){
      return true;
    }
    return false;
  }

  logoutUser(){
    sessionStorage.removeItem('admin');
    this.router.navigate(['/admin-login']);
  }

}
