import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserGatewaysService } from './gateways/user-gateways.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _userGateways: UserGatewaysService, private _router: Router) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return
        // return this._userGateways.isLoggedIn.pipe(
        //     take(1),
        //     map((isLoggedIn: boolean) =>{
        //         if(!isLoggedIn){
        //             this._router.navigate(["/login"])
        //             return false
        //         }
        //         return true
        //     })
        // )
    }
}

//   canActivate(): boolean {
//     if(this._userGateways.loggedIn()){
//       return false
//     }else{
//       this._router.navigate(["/dangky"])
//       this._router.navigate(["/dangnhap"])
//       return true
//     }
//   }
