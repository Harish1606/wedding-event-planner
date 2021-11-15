import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Request } from '../../models/Request';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {

  id:any;
  requests:Request[]=[];
  temp:Request[]=[];
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("user");
    this.requests=[];
    this.service.getAllRequests().subscribe(data=>{
      this.temp=data;
      this.temp.forEach(res=>{
        if(res.user_id==this.id && res.flag==true){
          this.requests.push(res);
        }
      })
    },
    error=>{
      console.log(error);
    })
  }

}
