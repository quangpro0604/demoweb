import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CourseGatewaysService } from 'src/app/gateways/course-gateways.service';
import { ICourse } from 'src/app/models/course';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  constructor(private _carService: CartService, private _courseGateway: CourseGatewaysService) { }

  ngOnInit(): void {
    // this._courseGateway.fetchCourse().subscribe(
    //   (res: ICourse[]) =>{
    //     console.log(res);
    //     this._carService.getItem(res);

    //   },
    //   err =>{
    //     console.log(err);
    //   }
    // )
    // this.items = this._carService.items;
    // this._carService.itemsEmitter.subscribe(res => {
    //   this.items = res;
    // })
  }


}
