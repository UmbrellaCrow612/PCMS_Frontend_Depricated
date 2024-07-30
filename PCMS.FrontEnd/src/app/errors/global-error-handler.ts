import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../environments/environment';
import { ErrorDialogComponent } from './error-dialog.component';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private dialog: MatDialog, private zone: NgZone) {}

  handleError(error: any): void {
    if (environment.useCustomErrorHandler) {
      this.zone.run(() => {
        console.error('An error occurred:', error);
        this.dialog.open(ErrorDialogComponent, {
          data: { error: error.message || 'An unknown error occurred' },
        });
      });
    } else {
      // Rethrow the error to be caught by Angular's default error handler
      throw error;
    }
  }
}
