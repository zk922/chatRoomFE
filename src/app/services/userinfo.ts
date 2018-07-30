import {Injectable} from '@angular/core';

interface UserInfo {
  u_name: string;
  u_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(){

  }

  get data(): UserInfo{
    let u_name = localStorage.getItem('u_name');
    let u_id = localStorage.getItem('u_id');
    return {u_id: u_id, u_name: u_name}
  }


}
