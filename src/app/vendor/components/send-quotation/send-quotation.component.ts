import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/models/Vendor';
import { Package } from '../../models/Package';
import { Response } from '../../models/Response';
import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'app-send-quotation',
  templateUrl: './send-quotation.component.html',
  styleUrls: ['./send-quotation.component.css']
})
export class SendQuotationComponent implements OnInit {

  id:any;
  userid:any;
  requestid:any;
  packages:Package[]=[];
  vendor_packages:Package[]=[];
  selected_packages:any=[];
  vendor=new Vendor()
  response=new Response();
  constructor(private service:VendorService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("vendor");
    this.userid=this.route.snapshot.paramMap.get("userid");
    this.requestid=this.route.snapshot.paramMap.get("requestid");

    //Package details
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

    //Vendor details
    this.service.getVendor(this.id).subscribe(data=>{
      this.vendor=data;
    },
    error=>{
      console.log(error);
    })
  }

  selectPackage(id:number,name:string,amount:string){
    let check=false;
    for (var i = this.selected_packages.length - 1; i >= 0; --i) {
      if (this.selected_packages[i].id == id) {
          this.selected_packages.splice(i,1);
          check=true;
          break;
      }
    }
    if(!check){
      this.selected_packages.push({id:id,name:name,amount:amount});
    }
  }

  sendQuotation(){
    this.response.package_id1=this.selected_packages[0].id;
    this.response.package_id2=this.selected_packages[1].id;
    this.response.package_id3=this.selected_packages[2].id;
    this.response.package_name1=this.selected_packages[0].name;
    this.response.package_name2=this.selected_packages[1].name;
    this.response.package_name3=this.selected_packages[2].name;
    this.response.package_amount1=this.selected_packages[0].amount;
    this.response.package_amount2=this.selected_packages[1].amount;
    this.response.package_amount3=this.selected_packages[2].amount;
    this.response.vendor_id=this.vendor.id;
    this.response.vendor_name=this.vendor.name;
    this.response.vendor_number=this.vendor.mobile_no;
    this.response.vendor_type=this.vendor.type;
    this.response.user_id=this.userid;
    this.response.req_id=this.requestid;
    this.response.flag=false;

    this.service.sendResponse(this.response).subscribe(data=>{
      alert("Quotation sent successfully");
    },
    error=>{
      console.log(error);
    })
  }

  packageDetailsPage(id:number){
    this.router.navigate(['/vendor/package/'+id]);
  }

}
