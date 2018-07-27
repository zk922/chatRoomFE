import {NgModule} from '@angular/core';
import {RoomComponent} from './room';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    RoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: RoomComponent}])
  ],
  exports: [
    RoomComponent
  ],
  providers: [

  ]
})
export class RoomModule {}
