import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreUpdateRoutingModule } from './score-update-routing.module';
import { ScoreUpdateComponent } from './score-update/score-update.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormScoreComponent } from '../common/form-score/form-score.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ScoreUpdateComponent,
    FormScoreComponent
  ],
  imports: [
    CommonModule,
    ScoreUpdateRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ScoreUpdateModule { }
