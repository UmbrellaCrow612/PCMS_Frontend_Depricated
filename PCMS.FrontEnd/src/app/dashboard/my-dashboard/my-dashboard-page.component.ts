import { Component } from '@angular/core';
import {
  Color,
  ScaleType,
  PieChartModule,
  GaugeModule,
} from '@swimlane/ngx-charts';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';

@Component({
  selector: 'app-my-dashboard-page',
  templateUrl: './my-dashboard-page.component.html',
  styleUrl: './my-dashboard-page.component.scss',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardActions,
    MatButton,
    MatCardContent,
    PieChartModule,
    GaugeModule,
  ],
})
export class MyDashboardPageComponent {
  CaseStatusView: any = undefined;
  CaseStatusColorScheme: Color = {
    name: 'status',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  CaseStatusResults = [
    {
      name: 'Open',
      value: 12,
    },
    {
      name: 'Closed',
      value: 21,
    },
    {
      name: 'Pending',
      value: 22,
    },
    {
      name: 'UI',
      value: 11,
    },
  ];
  CaseStatusLegendTitle = 'Distribution';

  onCaseStatusResize(width: number, height: number) {
    this.CaseStatusView = [width, height];
  }

  view: any = undefined;
  results = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
    {
      name: 'UK',
      value: 5200000,
    },
    {
      name: 'Italy',
      value: 7700000,
    },
    {
      name: 'Spain',
      value: 4300000,
    },
  ];

  onGaugeResize(width: number, height: number) {
    this.view = [width, height];
  }
}
