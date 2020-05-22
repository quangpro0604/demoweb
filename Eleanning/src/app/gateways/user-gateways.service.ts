import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGatewaysService {

  baseUrl = "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung";

  dangKy(data: any){
    return this._http.post(`${this.baseUrl}/DangKy`, data);
  }
  dangNhap(data: any){
    return this._http.post(`${this.baseUrl}/DangNhap`, data);
  }

  // loggedIn(){
  //   return localStorage.getItem("credentials");
  // }
  constructor(private _http: HttpClient) { }
}
