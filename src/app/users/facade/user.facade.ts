import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {

  constructor(private userService: UserService) { }

  login(user: any) {
    this.userService.login(user)
  }
}
