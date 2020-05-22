import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { CourseGatewaysService } from 'src/app/gateways/course-gateways.service';
import { ISelectedCourse } from 'src/app/models/course';
import { ActivatedRoute } from '@angular/router';
import { AddcourseGatewaysService } from 'src/app/gateways/addcourse-gateways.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  constructor(private _courseService: CourseService, private _courseGateways: CourseGatewaysService, private activeRoute: ActivatedRoute, private _addCourseGateways: AddcourseGatewaysService ) { }
  selectedCourse: ISelectedCourse;
  id: any;
  ngOnInit(): void {
    this.getParamFromUrl();
    this.getListCourse();
  }

  addCourse(data: any){
    this._addCourseGateways.fetchAddCourse(data).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }

  getListCourse(){
    this._courseGateways.fetchCourseDetail(this.id).subscribe(
      (res: ISelectedCourse)=>{
        this._courseService.setSelectedCourse(res);
        console.log(res);
      },
      err =>{
        console.log(err.error);
      }
    )
    this.selectedCourse = this._courseService.courseListDetail;
    this._courseService.courseDetailEmitter.subscribe(res =>{
      this.selectedCourse = res;
    })
  }

  getParamFromUrl(){
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    console.log(this.id);
  }

}
