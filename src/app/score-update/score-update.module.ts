import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreUpdateRoutingModule } from './score-update-routing.module';
import { ScoreUpdateComponent } from './score-update/score-update.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ScoreUpdateComponent
  ],
  imports: [
    CommonModule,
    ScoreUpdateRoutingModule,
    FontAwesomeModule
  ]
})
export class ScoreUpdateModule { }
