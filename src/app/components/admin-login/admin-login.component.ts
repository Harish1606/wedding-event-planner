import { AdminLoginService } from './../../services/admin-login.service';
import { Admin } from './../../models/Admin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loading=false;
  admin=new Admin();
  message:string='';
  response_admin:any;

  constructor(private service:AdminLoginService,private router:Router) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    this.loading=true;
    this.service.login(this.admin).subscribe(data=>{
      this.response_admin=data;
      this.loading=false;
      sessionStorage.setItem("admin",this.response_admin.id);
      this.router.navigate(['/admin']);
    },
    error=>{
      alert(error.error.message);
      this.loading=false;
      console.log(error);
    })
  }

}
