import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-feel-people',
  templateUrl: './feel-people.component.html',
  styleUrls: ['./feel-people.component.scss']
})
export class FeelPeopleComponent implements OnInit {

  @Input() options: any;
  constructor() { }

  ngOnInit(): void {
  
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
