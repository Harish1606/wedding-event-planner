import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/user/models/Request';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  flag=false;
  message:string='';
  selected_fields:any=[];
  from_date:any;
  to_date:any;
  name=false;
  address=false;
  mobile_no=false;
  request_date=false;
  function_date=false;
  temp:Request[]=[];
  requests:Request[]=[];
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.service.getAllRequests().subscribe(data=>{
      this.temp=data;
    })
  }

  checked(event:any){
      let check=false;
      for (var i = this.selected_fields.length - 1; i >= 0; --i) {
        if (this.selected_fields[i] == event.target.value) {
            this.selected_fields.splice(i,1);
            check=true;
            break;
        }
      }
      if(!check){
        this.selected_fields.push(event.target.value);
      }
  }

  selectedFields(){
    if(this.selected_fields.length==0){
      this.message="Atleast one field should be included";
      return console.log(this.message);
    }
    else{
      this.message='';
    }
    this.flag=true;
    for(var i=this.selected_fields.length-1;i>=0;i--){
      if(this.selected_fields[i]=="name"){
        this.name=true;
      }
      else if(this.selected_fields[i]=="address"){
        this.address=true;
      }
      else if(this.selected_fields[i]=="mobile number"){
        this.mobile_no=true;
      }
      else if(this.selected_fields[i]=="request date"){
        this.request_date=true;
      }
      else if(this.selected_fields[i]=="function date"){
        this.function_date=true;
      }
    }

    this.requests=[];
    this.temp.forEach(res=>{
      if(res.from_date>=this.from_date && res.from_date<=this.to_date){
        this.requests.push(res);
      }
    })
  }

  exportTableToExcel(){
    let element=document.getElementById('excel');
    let fileName='report'+'('+this.from_date+'-'+this.to_date+').xls';
    const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);
    const wb:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,"Sheet1");
    XLSX.writeFile(wb,fileName);
  }

}
