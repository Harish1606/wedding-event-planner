import { Vendor } from './../../models/Vendor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { Service } from '../models/Service';
import { Request } from 'src/app/user/models/Request';
import { Image } from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url='http://localhost:8091/';
  constructor(private http:HttpClient) { }

  public getAdmin(id:number):Observable<any>{
    return this.http.get(this.url+'getadmin/'+id);
  }

  public getAllUsers():Observable<any>{
    return this.http.get(this.url+'getusers');
  }

  public deleteUser(id:number):Observable<any>{
    return this.http.delete(this.url+'delete/'+id,{responseType:'text'});
  }

  public approveUser(user:User):Observable<Object>{
    return this.http.put<User>(this.url+'approve',user);
  }

  public addVendor(vendor:Vendor):Observable<Object>{
    return this.http.post<Vendor>(this.url+'addvendor',vendor);
  }

  public addService(service:Service):Observable<Object>{
    return this.http.post<Vendor>(this.url+'addservice',service);
  }

  public getAllRequests():Observable<any>{
    return this.http.get(this.url+'getrequests');
  }

  public updateStatus(request:Request):Observable<Object>{
    return this.http.put<Request>(this.url+'requeststatus',request);
  }

  public addImage(image:Image):Observable<Object>{
    return this.http.post<Image>(this.url+'addimage',image);
  }

  public getAllImages():Observable<any>{
    return this.http.get(this.url+'getimages');
  }

  public deleteImage(id:number):Observable<any>{
    return this.http.delete(this.url+'deleteimage/'+id,{responseType:'text'});
  }
}
