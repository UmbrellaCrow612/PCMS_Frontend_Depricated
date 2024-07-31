import { Component } from '@angular/core';

@Component({
  selector: 'app-incident-analysis-page',
  templateUrl: './incident-analysis-page.component.html',
  styleUrl: './incident-analysis-page.component.css',
})
export class IncidentAnalysisPageComponent {
  CrimeIncidentCountResult = [
    {
      name: 'Assault',
      value: 340,
    },
    {
      name: 'Theft',
      value: 200,
    },
    {
      name: 'Robbery',
      value: 100,
    },
  ];
  CrimeIncidentCountView: any = undefined;

  onCrimeIncidentCountResize(width: number, height: number) {
    this.CrimeIncidentCountView = [width, height];
  }

  CrimeIncidentBreakdownResult = [
    {
      name: 'Assault',
      value: 340,
    },
    {
      name: 'Theft',
      value: 200,
    },
    {
      name: 'Robbery',
      value: 100,
    },
  ];
  CrimeIncidentBreakdownView: any = undefined;

  onCrimeIncidentBreakdownResize(width: number, height: number) {
    this.CrimeIncidentBreakdownView = [width, height];
  }

  CrimeIncidentDistrictResult = [
    {
      name: 'S5',
      series: [
        {
          name: 'Assault',
          value: 211,
        },
        {
          name: 'Robbery',
          value: 120,
        },
      ],
    },

    {
      name: 'S3',
      series: [
        {
          name: 'Assault',
          value: 322,
        },
        {
          name: 'Robbery',
          value: 120,
        },
      ],
    },

    {
      name: 'S1',
      series: [
        {
          name: 'Assault',
          value: 12,
        },
        {
          name: 'Robbery',
          value: 120,
        },
      ],
    },
  ];
  CrimeIncidentDistrictView: any = undefined;

  onCrimeIncidentDistrictResize(width: number, height: number) {
    this.CrimeIncidentDistrictView = [width, height];
  }
}
