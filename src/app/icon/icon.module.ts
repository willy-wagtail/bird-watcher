import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCameraOutlineComponent } from './video-camera-outline/video-camera-outline.component';
import { HomeOutlineComponent } from './home-outline/home-outline.component';
import { EyeOutlineComponent } from './eye-outline/eye-outline.component';
import { UserCircleOutlineComponent } from './user-circle-outline/user-circle-outline.component';
import { UserOutlineComponent } from './user-outline/user-outline.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoCameraOutlineComponent,
    HomeOutlineComponent,
    EyeOutlineComponent,
    UserCircleOutlineComponent,
    UserOutlineComponent,
  ],
  exports: [
    VideoCameraOutlineComponent,
    HomeOutlineComponent,
    EyeOutlineComponent,
    UserCircleOutlineComponent,
    UserOutlineComponent,
  ]
})
export class IconModule { }
