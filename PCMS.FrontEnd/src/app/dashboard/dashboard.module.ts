import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../shared/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardHomePageComponent } from './home/dashboard-home-page.component';
import { IncidentAnalysisPageComponent } from './incident-analysis/incident-analysis-page.component';
import { MyDashboardPageComponent } from './my-dashboard/my-dashboard-page.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardHomePageComponent,
    IncidentAnalysisPageComponent,
    MyDashboardPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    NgxChartsModule,
  ],
})
export class DashboardModule {}
