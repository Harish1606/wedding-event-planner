import { UserService } from './../../services/user.service';
import { Package } from './../../../vendor/models/Package';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  package_id:any;
  package=new Package();
  constructor(private route:ActivatedRoute,private service:UserService) { }

  ngOnInit(): void {
    this.package_id=this.route.snapshot.paramMap.get("id");
    this.service.getPackage(this.package_id).subscribe(data=>{
      this.package=data;
    },
    error=>{
      console.log(error);
    })
  }

}
