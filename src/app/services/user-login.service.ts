import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private url='http://localhost:8091/';
  constructor(private http:HttpClient,private router:Router) { }

  public register(user:User):Observable<Object>{
    return this.http.post<User>(this.url+'userregister',user);
  }

  public login(user:User):Observable<Object>{
    return this.http.post<User>(this.url+'userlogin',user);
  }

  loggedIn(){
    if(!!sessionStorage.getItem('user')){
      return true;
    }
    return false;
  }

  logoutUser(){
    sessionStorage.removeItem('user');
    this.router.navigate(['/user-login']);
  }
}
