import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AppUiModule } from '../app-ui/app-ui.module';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { NzInputModule } from 'ng-zorro-antd/input';



@NgModule({
  declarations: [
    UserContainerComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AppUiModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule
  ]
})
export class UsersModule { }
