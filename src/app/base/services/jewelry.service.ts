import { Injectable, Version } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { Observable } from 'rxjs';
// import { contentHeaders } from './headers';
import 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class dataService {
  remotePosts = new BehaviorSubject([]);
  _router;
  public baseURL: string = environment.serverurl;
  // GroupData :any;

  constructor(public http: HttpClient, router: Router) {
    this._router = router;
  }

  login(loginanme: string,pwd:string) {
    return this.http.get<any>(`${this.baseURL}/Users/Login?Loginname=`+loginanme + "&pwd=" + pwd);
  }

 getjewelryType(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/jewellary/GetJewellaryType`);
  }

  getjewelryCategory(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/jewellary/GetJewellaryCategory`);
  }
  
  getJewellaryDetails(): Observable<any>{
    return this.http.get<any>(`${this.baseURL}/jewellary/GetJewellaryDetails`);
  }
  PostJewellary(obj: object) {
    return this.http.post<any>(`${this.baseURL}/jewellary/AddJewellary`, obj);
  }
//   updateClaims(obj: any) {
//     return this.http.post<any>(`${this.baseURL}/UpdateClaims`, obj)
//   }
//   getGroupData() {
//     return this.http.get<any>(`${this.baseURL}/GetLookupData`)
//   }
//   getGetDashboardData(userid: any) {
//     return this.http.get<any>(`${this.baseURL}/GetDashboardData?userid=${userid}`)
//   }
//   updateUserCliam(userid: any, claimids: any) {
//     return this.http.post<any>(`${this.baseURL}/AssignClaim?UserId=${userid}&ClaimIds=${claimids}`, '')
//   }
  

}
