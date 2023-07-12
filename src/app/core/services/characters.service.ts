import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store';
import { LoadCharactersSuccess } from 'src/app/characters/actions/character.actions';
import { URL_RESOURCE } from '../resources/url.resources';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient, private store: Store) { }

  public getAll(): void {
    this.httpClient.get(`${URL_RESOURCE.apiUrl}/characters`).subscribe( (characters) => this.store.dispatch( LoadCharactersSuccess({characters})));    
  }
}
