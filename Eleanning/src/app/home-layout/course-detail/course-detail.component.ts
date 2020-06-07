import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { CourseGatewaysService } from 'src/app/gateways/course-gateways.service';
import { ISelectedCourse, ICourse } from 'src/app/models/course';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  constructor(private _courseService: CourseService, private _courseGateways: CourseGatewaysService, private activeRoute: ActivatedRoute, private _cartService: CartService) { }
  selectedCourse: ISelectedCourse;
  id: any;
  product: ISelectedCourse;
  ngOnInit(): void {
    this.getParamFromUrl();
    this.getListCourse();
  }

  addToCart(product){
    // this._cartService.addToCart(product);
    this._courseGateways.fetchCourseDetail(this.id).subscribe(
      (res: ISelectedCourse) =>{
        this._courseService.addToCart(res);
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
    this.product = this._courseService.courseListDetail;
    this._courseService.productEmitter.subscribe(res =>{
      this.product = res;
    })
    
    console.log(product);
    window.alert('Sản Phẩm Của Bạn Đã Được Thêm Vào Gio Hàng');
  }

  getListCourse() {
    this._courseGateways.fetchCourseDetail(this.id).subscribe(
      (res: ISelectedCourse) => {
        this._courseService.setSelectedCourse(res);
        console.log(res);
      },
      err => {
        console.log(err.error);
      }
    )
    this.selectedCourse = this._courseService.courseListDetail;
    this._courseService.courseDetailEmitter.subscribe(res => {
      this.selectedCourse = res;
    })
  }

  getParamFromUrl() {
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    console.log(this.id);
  }

}
