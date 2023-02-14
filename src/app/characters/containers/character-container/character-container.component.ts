import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersFacade } from '../../facades/characters.facade';

@Component({
  selector: 'app-character-container',
  templateUrl: './character-container.component.html',
  styleUrls: ['./character-container.component.sass']
})
export class CharacterContainerComponent implements OnInit {
  characters$: Observable<any[]>
  
  constructor( private charactersFacade: CharactersFacade ) { }

  ngOnInit(): void {
    this.charactersFacade.initializeSubscription();
    this.characters$ = this.charactersFacade.getCharacters$();    
  }
}
