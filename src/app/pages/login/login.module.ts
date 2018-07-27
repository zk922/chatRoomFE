import {NgModule} from '@angular/core';
import {LoginComponent} from './login';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }])
  ],
  exports: [
    LoginComponent
  ],
  providers: [

  ]
})
export class LoginModule {}
