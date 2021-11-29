import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerCreateComponent } from './player-create/player-create.component';
import { PlayerListComponent } from './player-list/player-list.component';


const routes: Routes = [
  {
    path:'list',
    component:PlayerListComponent
  },
  {
    path:'create',
    component:PlayerCreateComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerPageRoutingModule { }
