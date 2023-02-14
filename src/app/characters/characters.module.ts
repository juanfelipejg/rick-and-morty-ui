import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './components/character/character.component';
import { CharacterContainerComponent } from './containers/character-container/character-container.component';



@NgModule({
  declarations: [
    CharacterComponent,
    CharacterContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CharacterContainerComponent
  ]
})
export class CharactersModule { }
