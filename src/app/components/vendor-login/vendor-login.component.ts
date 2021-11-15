import { VendorLoginService } from './../../services/vendor-login.service';
import { Vendor } from './../../models/Vendor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {

  loading=false;
  change_password:boolean=false;
  message:string='';
  vendor=new Vendor();
  response_vendor:any;

  constructor(private service:VendorLoginService,private router:Router) { }

  ngOnInit(): void {
  }

  loginVendor(){
    this.loading=true;
    this.service.login(this.vendor).subscribe(data=>{
      this.response_vendor=data;
      this.loading=false;
      if(this.response_vendor.flag==false){
        this.change_password=true;
        this.vendor.flag=true;
        this.vendor.password='';
      }
      else{
        sessionStorage.setItem("vendor",this.response_vendor.id);
        this.router.navigate(['/vendor']);
      }
    },
    error=>{
      alert(error.error.message);
      this.loading=false;
      console.log(error);
    })
  }

  update_password(){
    this.loading=true;
    this.service.change_password(this.response_vendor.id,this.vendor).subscribe(data=>{
      this.loading=false;
      sessionStorage.setItem("vendor",this.response_vendor.id);
      this.router.navigate(['/vendor']);
    },
    error=>{
      alert(error.error.message);
      this.loading=false;
      console.log(error);
    })
  }

}
