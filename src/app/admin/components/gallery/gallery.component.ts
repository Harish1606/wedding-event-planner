import { HttpClient } from '@angular/common/http';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Image } from '../../models/Image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  image=new Image();
  images:Image[]=[];
  imageUrl:any;

  @ViewChild('fileButton') fileButton:any
  
  constructor(private service:AdminService,private http:HttpClient) { }

  ngOnInit(): void {
    this.service.getAllImages().subscribe(data=>{
      this.images=data;
    },
    error=>{
      console.log(error);
    })
  }

  fileChanged(event:any){
    const files=event.target.files
    const data=new FormData();
    data.append('file',files[0]);
    data.append('UPLOADCARE_STORE','1');
    data.append('UPLOADCARE_PUB_KEY','55bf61ef6ea7e9adfec3')

    this.http.post('https://upload.uploadcare.com/base/',data).subscribe(res=>{
      this.imageUrl=res;
      this.image.url=this.imageUrl.file;
    },
    error=>{
      console.log(error);
    })
  }

  uploadFile(){
    this.fileButton.nativeElement.click()
  }

  addImage(){
    this.service.addImage(this.image).subscribe(data=>{
      alert("Image added successfully");
      this.imageUrl='';
      this.service.getAllImages().subscribe(data=>{
        this.images=data;
      },
      error=>{
        console.log(error);
      })
    },
    error=>{
      console.log(error);
    })
  }

  deleteImage(id:number){
    this.service.deleteImage(id).subscribe(data=>{
      alert("Image deleted successfully");
      this.service.getAllImages().subscribe(data=>{
        this.images=data;
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

