import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterContainerComponent } from './characters/containers/character-container/character-container.component';

const routes: Routes = [
  { path: 'home', component: CharacterContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
