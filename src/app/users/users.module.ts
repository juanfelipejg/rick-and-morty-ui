import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { LoginComponent } from './components/login/login.component';
import { AppUiModule } from '../app-ui/app-ui.module';



@NgModule({
  declarations: [
    UserContainerComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppUiModule
  ]
})
export class UsersModule { }
