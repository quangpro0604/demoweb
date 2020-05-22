import { Component, OnInit } from '@angular/core';
import { UserGatewaysService } from 'src/app/gateways/user-gateways.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _userGateways: UserGatewaysService, private _router: Router) { }

  
  ngOnInit(): void {
  }
  logoutUser(){
    localStorage.removeItem("credentials");
  }
  

}
