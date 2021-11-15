import { ComponentCanDeactivate } from './../../component-can-deactivate';
import { UserService } from './../../services/user.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit,ComponentCanDeactivate {

  id:any;
  user=new User();
  message:string='';
  response_user:any;
  flag:boolean=false;

  canDeactivate(): boolean{
    return !this.flag;
  }

  constructor(private service:UserService) { }
  

  ngOnInit(): void {
    this.id=sessionStorage.getItem("user");
    this.service.getUser(this.id).subscribe(data=>{
      this.user=data;
    },
    error=>{
      console.log(error);
    })
  }

  fieldChange(){
    this.flag=true;
  }

  @HostListener('window:beforeunload', ['$event'])
  public onPageUnload($event: BeforeUnloadEvent) {
    if (this.flag) {
      $event.returnValue = true;
    }
  }

  updateUserDetails(){
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
    
    this.flag=false;
    this.service.updateUser(this.user).subscribe(data=>{
      this.response_user=data;
      this.user=this.response_user;
    },
    error=>{
      console.log(error);
    })

  }

  resetUserDetails(){
    this.flag=false;
    this.service.getUser(this.id).subscribe(data=>{
      this.user=data;
    },
    error=>{
      console.log(error);
    })
  }

  confirmUserDetails(){
    document.getElementById("showmodal")?.click();
  }

}
