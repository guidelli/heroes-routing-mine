import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CrisesComponent } from './crises/crises.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: AdminDashboardComponent
          },
          {
            path: 'heroes',
            component: HeroesComponent
          },
          {
            path: 'crises',
            component: CrisesComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
