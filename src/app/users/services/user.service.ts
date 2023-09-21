import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { URL_RESOURCE } from 'src/app/core/resources/url.resources';
import { Login } from '../actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient, private store: Store) {}

  login(user: any) {
    this.httpClient
      .post(`${URL_RESOURCE.apiUrl}/Auth/login`, user)
      .subscribe((response: any) =>
        this.store.dispatch(
          Login({ username: user.username, token: response.token })
        )
      );
  }
}