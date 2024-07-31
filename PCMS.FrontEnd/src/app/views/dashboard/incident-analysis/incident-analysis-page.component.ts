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
}
