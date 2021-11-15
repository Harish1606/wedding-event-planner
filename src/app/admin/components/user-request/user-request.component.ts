import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/Service';
import { Request } from 'src/app/user/models/Request';
import { Admin } from 'src/app/models/Admin';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent implements OnInit {

  id:any;
  admin=new Admin();
  service=new Service();
  temp:Request[]=[];
  requests:Request[]=[];
  requests1:Request[]=[];
  request=new Request();
  location_:string='';
  p:number=1;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("admin");
    this.adminService.getAdmin(this.id).subscribe(data=>{
      this.admin=data;
    },
    error=>{
      console.log(error);
    })

    this.requests=[];
    this.requests1=[];
    this.adminService.getAllRequests().subscribe(data=>{
      this.temp=data;
      this.temp.forEach(res=>{
        if(res.flag==false){
          this.requests.push(res);
          this.requests1.push(res);
        }
      })
    },
    error=>{
      console.log(error);
    })
  }

  addService(){
    this.adminService.addService(this.service).subscribe(data=>{
      alert("Service added successfully");
    },
    error=>{
      console.log(error);
    })
  }

  statusAvailable(id:number){
    this.request.id=id;
    this.request.flag=true;
    this.request.status_="Available";
    this.adminService.updateStatus(this.request).subscribe(data=>{
      alert("Status sent to the user successfully");
      this.requests=[];
      this.adminService.getAllRequests().subscribe(data=>{
        this.temp=data;
        this.temp.forEach(res=>{
          if(res.flag==false){
            this.requests.push(res);
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

  statusNotavailable(id:number){
    this.request.id=id;
    this.request.flag=true;
    this.request.status_="Not available";
    this.adminService.updateStatus(this.request).subscribe(data=>{
      alert("Status sent to the user successfully");
      this.requests=[];
      this.adminService.getAllRequests().subscribe(data=>{
        this.temp=data;
        this.temp.forEach(res=>{
          if(res.flag==false){
            this.requests.push(res);
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

  Search(){
    if(this.location_==""){
      this.requests=this.requests1;
    }
    else{
      this.requests=this.requests.filter(res=>{
        return res.location_.toLocaleLowerCase().match(this.location_.toLocaleLowerCase());
      });
    }
  }

}
