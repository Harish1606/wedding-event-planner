import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/vendor/models/Response';

@Component({
  selector: 'app-view-quotation',
  templateUrl: './view-quotation.component.html',
  styleUrls: ['./view-quotation.component.css']
})
export class ViewQuotationComponent implements OnInit {

  id:any;
  temp:Response[]=[];
  responses:Response[]=[];
  response=new Response();
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("user");
    this.responses=[];
    this.service.getAllResponses().subscribe(data=>{
      this.temp=data;
      this.temp.forEach(res=>{
        if(res.user_id==this.id && res.flag==false){
          this.responses.push(res);
        }
      })
    },
    error=>{
      console.log(error);
    })
  }

  updateResponse(id:number){
    this.response.id=id;
    this.response.flag=true;
    this.service.updateResponse(this.response).subscribe(data=>{
      alert("Response sent to the vendor successfully");
      this.responses=[];
      this.service.getAllServices().subscribe(data=>{
        this.temp=data;
        this.temp.forEach(res=>{
          if(res.user_id==this.id && res.flag==false){
            this.responses.push(res);
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

  deleteResponse(id:number){
    this.service.deleteResponse(id).subscribe(data=>{
      this.responses=[];
      this.service.getAllServices().subscribe(data=>{
        this.temp=data;
        this.temp.forEach(res=>{
          if(res.user_id==this.id && res.flag==false){
            this.responses.push(res);
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

  packageDetailsPage(id:number){
    this.router.navigate(['/user/package/'+id]);
  }



}
