import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ],
})
export class LayoutModule { }
