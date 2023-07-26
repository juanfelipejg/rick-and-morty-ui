import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { AppLayoutRoutingModule } from './app-layouts-routing.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppLayoutRoutingModule
  ]
})
export class AppLayoutsModule { }
