import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CrisesComponent } from './crises/crises.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [AdminComponent , AdminDashboardComponent, HeroesComponent, CrisesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
