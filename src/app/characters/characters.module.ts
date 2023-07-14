import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppUiModule } from '../app-ui/app-ui.module';
import { CharacterComponent } from './components/character/character.component';
import { CharacterContainerComponent } from './containers/character-container/character-container.component';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterContainerComponent
  ],
  imports: [
    CommonModule,
    AppUiModule
  ],
  exports:[
    CharacterContainerComponent,
    CharacterComponent
  ]
})
export class CharactersModule { }
