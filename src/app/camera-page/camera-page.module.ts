import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraPageRoutingModule } from './camera-page-routing.module';
import { CameraPageComponent } from './camera-page.component';


@NgModule({
  declarations: [
    CameraPageComponent
  ],
  imports: [
    CommonModule,
    CameraPageRoutingModule
  ]
})
export class CameraPageModule { }
