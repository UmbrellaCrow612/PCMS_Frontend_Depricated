import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';


import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardHomePageComponent } from './home/dashboard-home-page.component';
import { IncidentAnalysisPageComponent } from './incident-analysis/incident-analysis-page.component';
import { MyDashboardPageComponent } from './my-dashboard/my-dashboard-page.component';

@NgModule({
    imports: [
    CommonModule,
    DashboardRoutingModule,

    
    DashboardPageComponent,
    DashboardHomePageComponent,
    IncidentAnalysisPageComponent,
    MyDashboardPageComponent,
],
})
export class DashboardModule {}
