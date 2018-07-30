import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserInfoService} from './services/userinfo';
import {RoomComponent} from './pages/room/room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private router: Router,
    private userInfo: UserInfoService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    if(this.userInfo.data.u_id){
      this.router.navigate(['room'],{relativeTo: this.activatedRoute})
    }
    else{
      this.router.navigate(['login'],{relativeTo: this.activatedRoute})
    }
  }
}
