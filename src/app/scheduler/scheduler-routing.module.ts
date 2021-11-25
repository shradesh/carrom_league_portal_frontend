import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointTableComponent } from '../point-table/point-table/point-table.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [
  {
    path:'',
    component:SchedulerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulerRoutingModule { }
