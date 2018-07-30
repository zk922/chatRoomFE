import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {UserInfoService} from '../app/services/userinfo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotUserInfo implements CanActivate{

  constructor(
    private userInfo: UserInfoService
  ){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
    return Boolean(this.userInfo.data.u_id);
  }
}
