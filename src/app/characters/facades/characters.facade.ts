import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CharactersService } from 'src/app/core/services/characters.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class CharactersFacade {
  private charactersService: CharactersService;
  private appState: AppState;
  public suscription = new Subscription();

  constructor(charactersService: CharactersService, appState: AppState) {
    this.charactersService = charactersService;
    this.appState = appState;
  }

  public getCharacters$(): Observable<any[]> {
    return this.appState.charactersState$;
  }

  public initializeSubscription() {
    this.suscription = this.charactersService.getAll().subscribe(( characters ) => this.appState.setCharactersState( characters ) );
  }
}
