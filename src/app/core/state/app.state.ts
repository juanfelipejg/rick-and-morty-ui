import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppState {
  
  private charactersState = new BehaviorSubject<any[]>([]);
  public charactersState$ = this.charactersState.asObservable();

  constructor() { }

  public setCharactersState( characters: any[] ){
    this.charactersState.next(characters);
  }
}
