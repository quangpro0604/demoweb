import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserGatewaysService } from 'src/app/gateways/user-gateways.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  constructor(private _userGateways: UserGatewaysService, private _router: Router) { }
  formSubmitAttempt: boolean;
  ngOnInit(): void {
  }

  handleSignIn(formSignIn: NgForm){
    this._userGateways.dangNhap(formSignIn.form.value).subscribe(
      res =>{
        console.log(res);
        localStorage.setItem("credentials", JSON.stringify(res));
        this._router.navigate(['/trang-chu']);
        this.formSubmitAttempt = true;
      },
      err =>{
        console.log(err);
      }
    )
  }

}
