import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrl: './dashboard-home-page.component.css',
})
export class DashboardHomePageComponent implements OnInit {
  isLoading = true;
  rowHeight: string | number = '25em';

  view: [number, number] = [300, 300];
  colorScheme: Color = {
    name: 'status',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  statusCaseResults: any = [
    {
      name: 'Open',
      value: 120,
    },
    {
      name: 'Closed',
      value: 400,
    },
    {
      name: 'Pending',
      value: 34,
    },
    {
      name: 'UI',
      value: 60,
    },
  ];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  explodeSlices: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Right;
  legendTitle = 'Status';

  ngOnInit(): void {
    this.loadDashboardHomePageData();
  }

  loadDashboardHomePageData() {
    this.isLoading = false;
  }
}
