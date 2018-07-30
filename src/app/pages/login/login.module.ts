import {NgModule} from '@angular/core';
import {LoginComponent} from './login';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }])
  ],
  exports: [
    LoginComponent
  ],
  providers: []
})
export class LoginModule {}
