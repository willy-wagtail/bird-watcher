import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppHeaderComponent,
    AppSidebarComponent,
  ],
})
export class AppLayoutModule { }
