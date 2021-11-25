import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreUpdateComponent } from './score-update/score-update.component';

const routes: Routes = [
  {
    path:'',
    component:ScoreUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreUpdateRoutingModule { }
