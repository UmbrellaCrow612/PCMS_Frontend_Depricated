import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
    selector: 'app-confirmation',
    template: `
    <h1 mat-dialog-title>Confirm</h1>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onConfirm()">Confirm</button>
      <button mat-button (click)="onCancel()">Cancel</button>
    </div>
  `,
    standalone: true,
    imports: [
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        MatDialogActions,
        MatButton,
    ],
})
export class ConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onConfirm(): void {
    this.dialogRef.close({ confirmed: true });
  }

  onCancel(): void {
    this.dialogRef.close({ confirmed: false });
  }
}
