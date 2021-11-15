import { Package } from '../models/Package';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from 'src/app/models/Vendor';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private url='http://localhost:8091/';
  constructor(private http:HttpClient) { }

  public getVendor(id:number):Observable<any>{
    return this.http.get(this.url+'getvendor/'+id);
  }

  public updateVendor(vendor:Vendor):Observable<Object>{
    return this.http.put<Vendor>(this.url+'updatevendor',vendor);
  }

  public getAllPackages():Observable<any>{
    return this.http.get(this.url+'getpackages');
  }

  public getPackage(id:number):Observable<any>{
    return this.http.get(this.url+'getpackage/'+id);
  }

  public addPackage(package_:Package):Observable<Object>{
    return this.http.post<Package>(this.url+'addpackage',package_);
  }

  public updatePackage(package_:Package):Observable<Object>{
    return this.http.put<Package>(this.url+'updatepackage',package_);
  }

  public deletePackage(id:number):Observable<any>{
    return this.http.delete(this.url+'deletepackage/'+id,{responseType:'text'});
  }

  public getAllRequests():Observable<any>{
    return this.http.get(this.url+'getrequests');
  }

  public sendResponse(response:Response):Observable<Object>{
    return this.http.post<Response>(this.url+'sendresponse',response);
  }

}
