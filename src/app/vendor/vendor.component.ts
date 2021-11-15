import { VendorService } from './services/vendor.service';
import { VendorLoginService } from './../services/vendor-login.service';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../models/Vendor';
import { Request } from '../user/models/Request';

@Component({
  templateUrl: 'vendor.component.html',
})
export class VendorComponent implements OnInit {

  id:any;
  vendor=new Vendor();
  requests:Request[]=[];
  constructor(public router:Router,private service:VendorLoginService,private vendorService:VendorService){}

  ngOnInit(){
    this.id=sessionStorage.getItem("vendor");
    this.vendorService.getVendor(this.id).subscribe(data=>{
      this.vendor=data;
    },
    error=>{
      console.log(error);
    })

    this.vendorService.getAllRequests().subscribe(data=>{
      this.requests=data;
    },
    error=>{
      console.log(error);
    })
  }

  sendQuotationPage(userid:number,reqid:number){
    this.router.navigate(['/vendor/send-quotation/'+userid+'/'+reqid]);
  }

  vendorLogout(){
    this.service.logoutUser();
  }
}