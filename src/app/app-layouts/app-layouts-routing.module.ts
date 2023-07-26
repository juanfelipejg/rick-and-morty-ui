import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CharacterContainerComponent } from '../characters/containers/character-container/character-container.component';

const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: CharacterContainerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
