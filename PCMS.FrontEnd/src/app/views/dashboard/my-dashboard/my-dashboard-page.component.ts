import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-my-dashboard-page',
  templateUrl: './my-dashboard-page.component.html',
  styleUrl: './my-dashboard-page.component.css',
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
  CaseStatusLegendTitle = 'Case';

  onCaseStatusResize(width: number, height: number) {
    this.CaseStatusView = [width, height];
  }
}
