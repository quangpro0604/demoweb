import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseGatewaysService {

  constructor(private _http: HttpClient) { }

  baseUrl = "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc";

  fetchCourse(){
    return this._http.get(`${this.baseUrl}/LayDanhSachKhoaHoc?MaNhom=GP01`);
  }

  fetchCourseDetail(id){
    return this._http.get(`${this.baseUrl}/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
  }
}
