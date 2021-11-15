import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/Vendor';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  vendor=new Vendor();
  message:string='';
  response_vendor:any;

  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }

  registerVendor(){
    this.vendor.flag=false;
    this.vendor.password= (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    this.service.addVendor(this.vendor).subscribe(data=>{
      this.response_vendor=data;
      alert("Successfully updated Vendor id : "+this.response_vendor.id+" Vendor password : "+this.response_vendor.password);
    },
    error=>{
      console.log(error);
    })
  }

}
