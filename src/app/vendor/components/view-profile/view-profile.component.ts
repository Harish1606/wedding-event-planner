import { VendorService } from './../../services/vendor.service';
import { ComponentCanDeactivate } from './../../component-can-deactivate';
import { Component, HostListener, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/Vendor';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit,ComponentCanDeactivate {

  id:any;
  message:string='';
  flag:boolean=false;
  vendor=new Vendor();
  response_vendor:any;

  canDeactivate(): boolean{
    return !this.flag;
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

  constructor(private service:VendorService) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("vendor");
    this.service.getVendor(this.id).subscribe(data=>{
      this.vendor=data;
    },
    error=>{
      console.log(error);
    })
  }

  updateVendorDetails(){
    this.flag=false;
    this.service.updateVendor(this.vendor).subscribe(data=>{
      this.response_vendor=data;
      this.vendor=this.response_vendor;
    },
    error=>{
      console.log(error);
    })
  }

  resetVendorDetails(){
    this.flag=false;
    this.service.getVendor(this.id).subscribe(data=>{
      this.vendor=data;
    },
    error=>{
      console.log(error);
    })
  }

  confirmVendorDetails(){
    document.getElementById("showmodal")?.click();
  }

}
