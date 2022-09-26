import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureHeroesModule } from '@app/feature-heroes/feature-heroes.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureHeroesModule,
    TranslocoModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
