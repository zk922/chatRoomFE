import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from './pages/login/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private router: Router
  ){

  }

  ngOnInit(){
    console.log('ready')
  }
}
