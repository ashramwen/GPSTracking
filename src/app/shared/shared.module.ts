import { AuthGuard } from './services/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

const SHARED_COMPONENTS = [
  SidebarMenuComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthGuard],
  declarations: [
    ...SHARED_COMPONENTS
  ],
  exports: [
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
