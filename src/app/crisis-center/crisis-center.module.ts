import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisesRoutingModule } from './crises-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CrisisListComponent, CrisisDetailComponent],
  imports: [
    CommonModule,
    CrisesRoutingModule,
    FormsModule
  ]
})
export class CrisesModule { }
