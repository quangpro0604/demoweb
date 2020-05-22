import { Injectable, Output, EventEmitter } from '@angular/core';
import { ICourse, ISelectedCourse } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseList: ICourse[] = [];
  @Output() courseListEmitter = new EventEmitter<ICourse[]>();

  courseListDetail: ISelectedCourse;
  @Output() courseDetailEmitter = new EventEmitter<ISelectedCourse>();
  constructor() { }


  setCourseList(courseList: ICourse[]) {
    this.courseList = courseList;
    this.courseListEmitter.emit(this.courseList);
  }

  setSelectedCourse(course: ISelectedCourse) {
    this.courseListDetail = course;
    this.courseDetailEmitter.emit(this.courseListDetail);
  }
}
