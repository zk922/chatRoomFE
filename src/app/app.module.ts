import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
const router: Routes = [
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'room',
    loadChildren: './pages/room/room.module#RoomModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(router)
    // LoginModule,
    // RoomModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
