import { Component, OnInit, Input } from '@angular/core';
import { UserGatewaysService } from 'src/app/gateways/user-gateways.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginStatus: Observable<boolean>;
  constructor(private _router: Router) { }

  
  ngOnInit(): void {
  }


  logoutUser(){
    localStorage.removeItem("credentials");
  }

  
}
