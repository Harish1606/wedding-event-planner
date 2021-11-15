import { Package } from './../../models/Package';
import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'app-manage-packages',
  templateUrl: './manage-packages.component.html',
  styleUrls: ['./manage-packages.component.css']
})
export class ManagePackagesComponent implements OnInit {

  id:any;
  package=new Package();
  package1=new Package();
  packages:Package[]=[];
  vendor_packages:Package[]=[];
  constructor(private service:VendorService) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("vendor");
    this.vendor_packages=[];
    this.service.getAllPackages().subscribe(data=>{
      this.packages=data;
      this.packages.forEach(res=>{
        if(res.vendor_id==this.id){
          this.vendor_packages.push(res);
        }
      })
    },
    error=>{
      console.log(error);
    })
  }

  addPackage(){
    this.package.vendor_id=this.id;
    this.service.addPackage(this.package).subscribe(data=>{
      alert("Package added successfully");
      this.vendor_packages=[];
      this.service.getAllPackages().subscribe(data=>{
        this.packages=data;
        this.packages.forEach(res=>{
          if(res.vendor_id==this.id){
          this.vendor_packages.push(res);
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

  getPackage(id:number){
    this.service.getPackage(id).subscribe(data=>{
      this.package1=data;
    },
    error=>{
      console.log(error);
    })
  }

  updatePackage(){
    this.service.updatePackage(this.package1).subscribe(data=>{
      alert("Package updated successfully");
      this.vendor_packages=[];
      this.service.getAllPackages().subscribe(data=>{
        this.packages=data;
        this.packages.forEach(res=>{
          if(res.vendor_id==this.id){
            this.vendor_packages.push(res);
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

  deletePackage(id:number){
    this.service.deletePackage(id).subscribe(data=>{
      alert("Package deleted successfully");
      this.vendor_packages=[];
      this.service.getAllPackages().subscribe(data=>{
        this.packages=data;
        this.packages.forEach(res=>{
          if(res.vendor_id==this.id){
            this.vendor_packages.push(res);
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

}
