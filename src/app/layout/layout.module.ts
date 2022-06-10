import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent as HeaderComponent } from './header/header.component';
import { SidebarComponent as SidebarComponent } from './sidebar/sidebar.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ],
})
export class LayoutModule { }
