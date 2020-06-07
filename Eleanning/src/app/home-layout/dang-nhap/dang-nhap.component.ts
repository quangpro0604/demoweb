import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserGatewaysService } from 'src/app/gateways/user-gateways.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  constructor(private _userGateways: UserGatewaysService, private _router: Router) { }

  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  // formSubmitAttempt: boolean;
  // @Output() emitFormSubmitAttempt = new EventEmitter();
  ngOnInit(): void {
  }

  checkLoginStatus(): boolean{
    return false;
  };

  get isLoggedIn(){
    return this.loginStatus.asObservable();
  }

  handleSignIn(formSignIn: NgForm){
    this._userGateways.dangNhap(formSignIn.form.value).subscribe(
      res =>{
        console.log(res);
        localStorage.setItem("credentials", JSON.stringify(res));
        this.loginStatus.next(true);
        this._router.navigate(['/trang-chu']);

        // this.formSubmitAttempt = true;
        // this.emitFormSubmitAttempt.emit(this.formSubmitAttempt);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
