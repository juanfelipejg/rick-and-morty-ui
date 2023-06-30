import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store';
import { LoadCharactersSuccess } from 'src/app/characters/actions/character.actions';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient, private store: Store) { }

  public getAll(): void {
    this.httpClient.get("https://localhost:7293/api/characters").subscribe( (characters) => this.store.dispatch( LoadCharactersSuccess({characters})));    
  }
}
