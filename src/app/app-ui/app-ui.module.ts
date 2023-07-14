import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    NzCardModule
  ],
  exports: [CardComponent]
})
export class AppUiModule { }
