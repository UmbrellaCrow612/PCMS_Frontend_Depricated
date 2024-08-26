import { Component } from '@angular/core';
import {
  ScaleType,
  BarChartModule,
  HeatMapModule,
  BubbleChartModule,
  PieChartModule,
  LineChartModule,
} from '@swimlane/ngx-charts';
import { bubbleData, heatMapData } from './test-data';

@Component({
  selector: 'app-incident-analysis-page',
  templateUrl: './incident-analysis-page.component.html',
  styleUrl: './incident-analysis-page.component.scss',
  standalone: true,
  imports: [
    BarChartModule,
    HeatMapModule,
    BubbleChartModule,
    PieChartModule,
    LineChartModule,
  ],
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

  CrimeIncidentTimelineResult = [
    {
      name: 'Assault',
      series: [
        {
          name: '2024/01/01',
          value: 12,
        },
        {
          name: '2024/01/02',
          value: 22,
        },
        {
          name: '2024/01/03',
          value: 1,
        },
      ],
    },
    {
      name: 'Sexual Assault',
      series: [
        {
          name: '2024/01/01',
          value: 22,
        },
        {
          name: '2024/01/02',
          value: 11,
        },
        {
          name: '2024/01/03',
          value: 2,
        },
      ],
    },
  ];
  CrimeIncidentTimelineView: any = undefined;

  onCrimeIncidentTimelineResize(width: number, height: number) {
    this.CrimeIncidentTimelineView = [width, height];
  }

  // Displaying crime intensity by day of the week and hour.
  CrimeIncidentIntensityView: any = undefined;
  CrimeIncidentIntensityColorScheme: any = {
    name: 'CrimeIncidentIntensity',
    selectable: true,
    group: ScaleType.Linear,
    domain: [
      '#5AA454',
      '#7AB74E',
      '#9ACA48',
      '#BBDC42',
      '#DDF03C',
      '#FFE436',
      '#FFC730',
      '#FFA92A',
      '#FF8B24',
      '#FF6D1E',
      '#FF4F18',
      '#FF3112',
      '#A10A28',
    ],
  };
  CrimeIncidentIntensityResult = heatMapData;

  onCrimeIncidentIntensityResize(width: number, height: number) {
    this.CrimeIncidentIntensityView = [width, height];
  }

  CrimeIncidentFrequencyResult = bubbleData;
  CrimeIncidentFrequencyView: any = undefined;

  onCrimeIncidentFrequencyResize(width: number, height: number) {
    this.CrimeIncidentFrequencyView = [width, height];
  }
}
