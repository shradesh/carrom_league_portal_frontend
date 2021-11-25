import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerPageRoutingModule } from './player-page-routing.module';
import { PlayerPageComponent } from './player-page/player-page.component';


@NgModule({
  declarations: [
    PlayerPageComponent
  ],
  imports: [
    CommonModule,
    PlayerPageRoutingModule
  ]
})
export class PlayerPageModule { }
