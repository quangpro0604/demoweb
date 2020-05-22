import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddcourseGatewaysService {

  constructor(private _http: HttpClient) { }

  baseUrl = "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc";

  fetchAddCourse(data: any) {
    return this._http.post(`${this.baseUrl}/GhiDanhKhoaHoc`, data);
  }
}
