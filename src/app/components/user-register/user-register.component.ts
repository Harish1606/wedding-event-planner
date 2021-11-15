import { UserLoginService } from './../../services/user-login.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  loading=false;
  message:string='';
  user=new User();

  constructor(private service:UserLoginService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.user.time=Date.now().toString();
    this.user.flag=false;
    if(!(this.user.password.includes("!") || this.user.password.includes("@") || this.user.password.includes("#") || this.user.password.includes("$") || this.user.password.includes("%") || this.user.password.includes("^") || this.user.password.includes("&") || this.user.password.includes("*") || this.user.password.includes("(") || this.user.password.includes(")") || this.user.password.includes("_"))){
      this.message='Password should have atleast 1 special character';
      return console.log(this.message);
    }
    else{
      this.message='';
    }
    var today = new Date();
    var birthDate = new Date(this.user.dob);
    var age = today.getFullYear()-birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if(age<18){
      this.message='Age should not be less than 18';
      return console.log(this.message);
    }
    else{
      this.message='';
    }

    this.loading=true;
    this.service.register(this.user).subscribe(data=>{
      let temp:any=data;
      alert("Your details are submitted successfully. User id : "+temp.id+" Password : "+temp.password);
      this.loading=false;
    },
    error=>{
      console.log(error);
      this.loading=false;
    })
  }

}
