import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCameraOutlineComponent } from './video-camera-outline/video-camera-outline.component';
import { HomeOutlineComponent } from './home-outline/home-outline.component';
import { EyeOutlineComponent } from './eye-outline/eye-outline.component';

@NgModule({
  declarations: [
    VideoCameraOutlineComponent,
    HomeOutlineComponent,
    EyeOutlineComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VideoCameraOutlineComponent,
    HomeOutlineComponent,
    EyeOutlineComponent
  ]
})
export class IconModule { }
