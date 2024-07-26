import { Component, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrl: './dashboard-home-page.component.css',
})
export class DashboardHomePageComponent implements OnInit {
  isPageLoading = true;

  multi: any[] = [
    {
      name: 'Germany',
      series: [
        {
          name: '1990',
          value: 62000000,
        },
        {
          name: '2010',
          value: 73000000,
        },
        {
          name: '2011',
          value: 89400000,
        },
      ],
    },

    {
      name: 'USA',
      series: [
        {
          name: '1990',
          value: 250000000,
        },
        {
          name: '2010',
          value: 309000000,
        },
        {
          name: '2011',
          value: 311000000,
        },
      ],
    },

    {
      name: 'France',
      series: [
        {
          name: '1990',
          value: 58000000,
        },
        {
          name: '2010',
          value: 50000020,
        },
        {
          name: '2011',
          value: 58000000,
        },
      ],
    },
    {
      name: 'UK',
      series: [
        {
          name: '1990',
          value: 57000000,
        },
        {
          name: '2010',
          value: 62000000,
        },
      ],
    },
  ];
  view: any[] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    name: 'status',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  CaseStatusColorScheme: Color = {
    name: 'status',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  CaseStatusResults: any = [
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
  CaseStatusGradient: boolean = true;
  CaseStatusShowLegend: boolean = false;
  CaseStatusShowLabels: boolean = true;
  CaseStatusIsDoughnut: boolean = true;
  CaseStatusExplodeSlices: boolean = false;
  CaseStatusLegendPosition: LegendPosition = LegendPosition.Right;
  CaseStatusLegendTitle = 'Status';

  ngOnInit(): void {
    this.loadDashboardHomePageData();
  }

  loadDashboardHomePageData() {
    this.isPageLoading = false;
  }
}
