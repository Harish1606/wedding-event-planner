import { UserLoginService } from './../../services/user-login.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loading=false;
  message:string='';
  user=new User();
  response_user:any;
  constructor(private service:UserLoginService,private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.loading=true;
    this.service.login(this.user).subscribe(data=>{
      this.response_user=data;
      this.loading=false;
      if(this.response_user.flag==true){
        sessionStorage.setItem("user",this.response_user.id)
        this.router.navigate(['/user']);
      }
      else{
        this.router.navigate(['/blank-page']);
      }
    },
    error=>{
      alert(error.error.message);
      console.log(error);
      this.loading=false;
    })
  }

}
