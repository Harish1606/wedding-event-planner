import { ActivatedRoute } from '@angular/router';
import { VendorService } from './../../services/vendor.service';
import { Package } from './../../models/Package';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  package_id:any;
  package=new Package();
  constructor(private route:ActivatedRoute,private service:VendorService) { }

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
