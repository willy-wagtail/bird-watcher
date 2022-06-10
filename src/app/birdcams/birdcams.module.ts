import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirdcamsRoutingModule } from './birdcams-routing.module';
import { BirdcamsComponent } from './birdcams.component';


@NgModule({
  declarations: [
    BirdcamsComponent
  ],
  imports: [
    CommonModule,
    BirdcamsRoutingModule
  ]
})
export class BirdcamsModule { }
