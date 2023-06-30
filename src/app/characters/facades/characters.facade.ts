import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import { CharactersService } from 'src/app/core/services/characters.service';
import { CharactersState } from '../reducer/character.reducter';

@Injectable({
  providedIn: 'root'
})
export class CharactersFacade {
  private charactersService: CharactersService;
  public suscription = new Subscription();

  constructor(charactersService: CharactersService, private store: Store<CharactersState>) {
    this.charactersService = charactersService;
  }

  public getCharacters$(): Observable<any[]> {
    return this.store.select(state => state.characters).pipe(
      map(( characters ) => characters))
  }

  public initializeSubscription() {
    this.charactersService.getAll();
  }
}
