import { Component } from '@angular/core';
import { UserFacade } from '../../facade/user.facade';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.sass']
})
export class UserContainerComponent {

  constructor(private facade: UserFacade) { }

  login( formLogin: any) {
    this.facade.login({ username: formLogin.email, password: formLogin.password })
  }
}
