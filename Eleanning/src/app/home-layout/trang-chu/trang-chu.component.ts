import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {

  status:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  layStatusHeader(value){
    this.status = value;
  }
}
