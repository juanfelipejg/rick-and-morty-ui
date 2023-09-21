import { Component } from '@angular/core';
import { UserFacade } from '../../facade/user.facade';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.sass']
})
export class UserContainerComponent {

  constructor(private facade: UserFacade) { }

  login() {
    console.log('hola mundo')
    this.facade.login({ username: 'Horacio', password: '123' })
  }
}
