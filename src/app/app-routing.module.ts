import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then(m => m.AdminLoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'player-page',
    loadChildren: () => import('./player-page/player-page.module').then(m => m.PlayerPageModule)
  },
  {
    path: 'score-update',
    loadChildren: () => import('./score-update/score-update.module').then(m => m.ScoreUpdateModule)
  },
  {
    path:'scheduler',
    loadChildren: () => import('./scheduler/scheduler.module').then(m => m.SchedulerModule)
  },
  {
  path:'point-table',
  loadChildren:() => import('./point-table/point-table.module').then(m=>m.PointTableModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
