import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ButtonComponent } from './button/button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [CardComponent, ButtonComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule
  ],
  exports: [CardComponent, ButtonComponent]
})
export class AppUiModule { }
