import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { CourseGatewaysService } from 'src/app/gateways/course-gateways.service';
import { ICourse } from 'src/app/models/course';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courseList: ICourse[];
  p: number = 1;
  

  constructor(private _courseService: CourseService, private _courseGateway: CourseGatewaysService) { }

  ngOnInit(): void {
    this._courseGateway.fetchCourse().subscribe(
      (res: ICourse[]) => {
        this._courseService.setCourseList(res);
        console.log(res);
        
      },
      err => {
        console.log(err.error);
      }
    )
    this.courseList = this._courseService.courseList;
    this._courseService.courseListEmitter.subscribe(res => {
      this.courseList = res
    })
  }


}
