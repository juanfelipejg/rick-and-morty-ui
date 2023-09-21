import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CharacterContainerComponent } from '../characters/containers/character-container/character-container.component';
import { UserContainerComponent } from '../users/components/user-container/user-container.component';

const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '',
        component: CharacterContainerComponent 
      },
      { path: '',
        component: UserContainerComponent,
        outlet: 'header'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
