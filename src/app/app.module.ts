import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
// import {LoginModule} from './pages/login/login.module';
// import {RoomModule} from './pages/room/room.module';
// import {RoomComponent} from './pages/room/room';
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
    BrowserModule,
    RouterModule.forRoot(router)
    // LoginModule,
    // RoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
