import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointTableRoutingModule } from './point-table-routing.module';
import { PointTableComponent } from './point-table/point-table.component';


@NgModule({
  declarations: [
    PointTableComponent
  ],
  imports: [
    CommonModule,
    PointTableRoutingModule
  ]
})
export class PointTableModule { }
