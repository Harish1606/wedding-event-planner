import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/admin/models/Image';

@Component({
  selector: 'app-view-gallery',
  templateUrl: './view-gallery.component.html',
  styleUrls: ['./view-gallery.component.css']
})
export class ViewGalleryComponent implements OnInit {

  images:Image[]=[];
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getAllImages().subscribe(data=>{
      this.images=data;
    },
    error=>{
      console.log(error);
    })
  }

}
