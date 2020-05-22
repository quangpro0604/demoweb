import { Component, OnInit } from '@angular/core';
import { UserGatewaysService } from 'src/app/gateways/user-gateways.service';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  constructor(private _userGateways: UserGatewaysService, private _router: Router) { }

  ngOnInit(): void {
  }

  handleSignup(formSignUp: NgForm){
    this._userGateways.dangKy({...formSignUp.form.value, maNhom: "GP01", maLoaiNguoiDung: "HV"}).subscribe(
      res =>{
        console.log(res);
        formSignUp.resetForm();
        this._router.navigate(['/dangnhap']);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
