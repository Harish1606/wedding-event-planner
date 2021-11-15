import { User } from 'src/app/models/User';
import { UserService } from './services/user.service';
import { UserLoginService } from './../services/user-login.service';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'user.component.html',
})
export class UserComponent implements OnInit {

  id:any;
  user=new User();
  constructor(private service:UserLoginService,public router:Router,private userService:UserService){}

  ngOnInit(){
    this.id=sessionStorage.getItem("user")
    this.userService.getUser(this.id).subscribe(data=>{
      this.user=data;
    },
    error=>{
      console.log(error);
    })
  }

  userLogout(){
    this.service.logoutUser()
  }
  
}