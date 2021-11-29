import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerPageRoutingModule } from './player-page-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerCreateComponent } from './player-create/player-create.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalFormComponent } from '../common/components/modal-form/modal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerCreateComponent,
    ModalFormComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PlayerPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class PlayerPageModule { }
