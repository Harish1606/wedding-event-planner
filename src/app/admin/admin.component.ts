import { AdminService } from './services/admin.service';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AdminLoginService } from '../services/admin-login.service';

@Component({
  templateUrl: 'admin.component.html',
})
export class AdminComponent implements OnInit{

  user=new User();
  users:User[]=[];
  pending_users:User[]=[];

  constructor(private service:AdminLoginService,
              public router:Router,
              private adminService:AdminService){}

  ngOnInit(){
    this.pending_users=[];
    this.adminService.getAllUsers().subscribe(data=>{
      this.users=data;
      this.users.forEach(res=>{
        if(res.flag==false){
          this.pending_users.push(res);
        }
      })
    },
    error=>{
      console.log(error);
    })
  }

  approve(id:number){
    this.user.id=id;
    this.adminService.approveUser(this.user).subscribe(data=>{
      this.pending_users=[];
      this.adminService.getAllUsers().subscribe(data=>{
        this.users=data;
        this.users.forEach(res=>{
          if(res.flag==false){
            this.pending_users.push(res);
          }
        })
      },
      error=>{
        console.log(error);
      })
    },
    error=>{
      console.log(error);
    })
  }

  deleteuser(id:number){
    this.adminService.deleteUser(id).subscribe(data=>{
      this.pending_users=[];
      this.adminService.getAllUsers().subscribe(data=>{
        this.users=data;
        this.users.forEach(res=>{
          if(res.flag==false){
            this.pending_users.push(res);
          }
        })
      },
      error=>{
        console.log(error);
      })
    },
    error=>{
      console.log(error);
    })
  }

  adminLogout(){
    this.service.logoutUser();
  }

}