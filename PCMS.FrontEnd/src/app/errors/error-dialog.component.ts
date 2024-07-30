import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  template: `
    <h2 mat-dialog-title>Error</h2>
    <mat-dialog-content class="mat-typography">
      @if (data.message) { Message: {{ data.message }} <br />} @if (data.status)
      { Status: {{ data.status }} <br />} @if(data.error){ Error:
      {{ data.error }} <br />
      } @if (data.stack) { Stack:
      {{ data.stack }}
      }
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
})
export class ErrorDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      message?: string;
      status?: number;
      error?: string;
      stack?: string;
    }
  ) {}
}
