import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirdcamsComponent } from './birdcams.component';

const routes: Routes = [{ path: '', component: BirdcamsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BirdcamsRoutingModule { }
