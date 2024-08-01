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
  CaseActionsView: any = undefined; // If left undefined it will take the width and height of the parent
  CaseActionsColorScheme = {
    name: 'status',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  onCaseActionsResize(width: number, height: number) {
    this.CaseActionsView = [width, height];
  }

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
  CaseStatusView: any = undefined;
  CaseStatusLegendPosition: LegendPosition = LegendPosition.Right;
  CaseStatusLegendTitle = 'Status';

  onCaseStatusResize(width: number, height: number) {
    this.CaseStatusView = [width, height];
  }

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
  CasePriorityLegendTitle: string = 'Priority';
  CasePriorityShowYAxis: boolean = true;
  CasePriorityGradient: boolean = false;
  CasePriorityShowLegend: boolean = true;
  CasePriorityShowXAxisLabel: boolean = true;
  CasePriorityYAxisLabel: string = 'Priority';
  CasePriorityShowYAxisLabel: boolean = true;
  CasePriorityXAxisLabel: string = 'Total';
  CasePriorityView: any = undefined;
  CasePriorityColorScheme: Color = {
    name: 'status',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  onCasePriorityResize(width: number, height: number) {
    this.CasePriorityView = [width, height];
  }

  CaseIncidentResult = [
    {
      name: 'Theft',
      value: 34,
    },
    {
      name: 'Burglary',
      value: 21,
    },
    {
      name: 'Robbery',
      value: 11,
    },
    {
      name: 'Assault',
      value: 23,
    },
    {
      name: 'Homicide',
      value: 8,
    },
    {
      name: 'Sexual Assault',
      value: 44,
    },
  ];
  CaseIncidentGradient: boolean = false;
  CaseIncidentAnimations: boolean = true;
  CaseIncidentView: any = undefined;
  CaseIncidentColorScheme: Color = {
    name: 'CaseIncident',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  onCaseIncidentResize(width: number, height: number) {
    this.CaseIncidentView = [width, height];
  }

  CaseIncidentLabelFormatting(c: any) {
    return `${c.label} Incidents`;
  }

  ngOnInit(): void {
    this.loadDashboardHomePageData();
  }

  loadDashboardHomePageData() {
    this.isPageLoading = false;
  }
}
