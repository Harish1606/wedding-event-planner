import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { Response } from 'src/app/vendor/models/Response';
import { Request } from '../models/Request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url='http://localhost:8091/';
  constructor(private http:HttpClient) { }

  public getUser(id:number):Observable<any>{
    return this.http.get(this.url+'get/'+id);
  }

  public updateUser(user:User):Observable<Object>{
    return this.http.put<User>(this.url+'updateuser',user);
  }

  public getAllServices():Observable<any>{
    return this.http.get(this.url+'getservices');
  }

  public sendRequest(request:Request):Observable<Object>{
    return this.http.post<Request>(this.url+'sendrequest',request);
  }

  public getAllResponses():Observable<any>{
    return this.http.get(this.url+'getresponses');
  }

  public updateResponse(response:Response):Observable<Object>{
    return this.http.put<User>(this.url+'updateresponse',response);
  }

  public deleteResponse(id:number):Observable<any>{
    return this.http.delete(this.url+'deleteresponse/'+id,{responseType:'text'});
  }

  public getAllRequests():Observable<any>{
    return this.http.get(this.url+'getrequests');
  }

  public getPackage(id:number):Observable<any>{
    return this.http.get(this.url+'getpackage/'+id);
  }

  public getAllImages():Observable<any>{
    return this.http.get(this.url+'getimages');
  }

}

