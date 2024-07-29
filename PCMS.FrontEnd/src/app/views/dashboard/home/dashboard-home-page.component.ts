import { Component, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrl: './dashboard-home-page.component.css',
})
export class DashboardHomePageComponent implements OnInit {
  isPageLoading = true;

  // Amount fo actions taken on a day per case type - each one has its own line
  CaseActionsResults: any[] = [
    {
      name: 'Open',
      series: [
        {
          name: '2024/01/01',
          value: 3,
        },
        {
          name: '2024/01/02',
          value: 5,
        },
        {
          name: '2024/01/03',
          value: 2,
        },
        {
          name: '2024/01/04',
          value: 9,
        },
      ],
    },
    {
      name: 'Closed',
      series: [
        {
          name: '2024/01/01',
          value: 0,
        },
        {
          name: '2024/01/02',
          value: 2,
        },
        {
          name: '2024/01/03',
          value: 9,
        },
        {
          name: '2024/01/04',
          value: 1,
        },
      ],
    },
    {
      name: 'Pending',
      series: [
        {
          name: '2024/01/01',
          value: 5,
        },
        {
          name: '2024/01/02',
          value: 14,
        },
        {
          name: '2024/01/03',
          value: 2,
        },
        {
          name: '2024/01/04',
          value: 4,
        },
      ],
    },
    {
      name: 'UI',
      series: [
        {
          name: '2024/01/01',
          value: 12,
        },
        {
          name: '2024/01/02',
          value: 20,
        },
        {
          name: '2024/01/03',
          value: 11,
        },
        {
          name: '2024/01/04',
          value: 7,
        },
      ],
    },
  ];
  CaseActionsLegendTitle: string = 'Case';
  CaseActionsLegend: boolean = true;
  CaseActionsShowLabels: boolean = true;
  CaseActionsAnimations: boolean = true;
  CaseActionsXAxis: boolean = true;
  CaseActionsYAxis: boolean = true;
  CaseActionsShowYAxisLabel: boolean = true;
  CaseActionsShowXAxisLabel: boolean = true;
  CaseActionsXAxisLabel: string = 'Day';
  CaseActionsYAxisLabel: string = 'Actions';
  CaseActionsTimeline: boolean = true;
  CaseActionsColorScheme = {
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
  CaseStatusShowLegend: boolean = true;
  CaseStatusShowLabels: boolean = true;
  CaseStatusIsDoughnut: boolean = true;
  CaseStatusExplodeSlices: boolean = false;
  CaseStatusLegendPosition: LegendPosition = LegendPosition.Right;
  CaseStatusLegendTitle = 'Status';

  CasePriorityResults = [
    {
      name: 'Low',
      value: 23,
    },
    {
      name: 'Medium',
      value: 34,
    },
    {
      name: 'High',
      value: 11,
    },
  ];
  CasePriorityShowXAxis: boolean = true;
  CasePriorityLegendTitle:string =  "Priority"
  CasePriorityShowYAxis: boolean = true;
  CasePriorityGradient: boolean = false;
  CasePriorityShowLegend: boolean = true;
  CasePriorityShowXAxisLabel: boolean = true;
  CasePriorityYAxisLabel: string = 'Priority';
  CasePriorityShowYAxisLabel: boolean = true;
  CasePriorityXAxisLabel: string = 'Total';
  CasePriorityColorScheme: Color = {
    name: 'status',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  ngOnInit(): void {
    this.loadDashboardHomePageData();
  }

  loadDashboardHomePageData() {
    this.isPageLoading = false;
  }
}
