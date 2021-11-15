import { Service } from './../../../admin/models/Service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Request } from '../../models/Request';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-request-quotation',
  templateUrl: './request-quotation.component.html',
  styleUrls: ['./request-quotation.component.css']
})
export class RequestQuotationComponent implements OnInit {

  id:any;
  request=new Request();
  services:Service[]=[];
  user=new User();
  locations=['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.services=[];
    this.userService.getAllServices().subscribe(data=>{
      this.services=data;
    },
    error=>{
      console.log(error);
    })

    this.id=sessionStorage.getItem("user");
    this.userService.getUser(this.id).subscribe(data=>{
      this.user=data;
      this.request.first_name=this.user.first_name;
      this.request.last_name=this.user.last_name;
      this.request.mobile_no=this.user.mobile_no;
    },
    error=>{
      console.log(error);
    })
  }

  sendRequest(){
    this.request.service_=this.request.service_.toString();
    this.request.status_='Pending';
    this.request.time_=Date.now().toString();
    this.request.user_id=this.id;
    this.request.flag=false;
    this.userService.sendRequest(this.request).subscribe(data=>{
      alert("Request submitted successfully");
    },
    error=>{
      console.log(error);
    })
  }

  confirmMobileNumber(){
    if(this.request.mobile_no==this.user.mobile_no){
      this.sendRequest();
    }
    else{
      document.getElementById("showmodal")?.click();
    }
  }

  confirmRegisteredMobileNumber(){
    this.request.mobile_no=this.user.mobile_no;
  }

}
