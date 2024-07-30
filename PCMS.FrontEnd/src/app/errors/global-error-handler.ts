import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ErrorDialogComponent } from './error-dialog.component';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private dialog: MatDialog, private zone: NgZone) {}

  handleError(error: any): void {
    if (environment.useCustomErrorHandler) {
      this.zone.run(() => {
        let errorData: { message?: string; status?: number; error?: string; stack?: string } = {};

        if (error instanceof HttpErrorResponse) {
          // Handle HTTP error
          errorData = {
            message: error.message,
            status: error.status,
            error: error.error ? JSON.stringify(error.error) : 'N/A',
          };
        } else if (error instanceof Error) {
          // Handle Client Error (Angular Error, ReferenceError...)
          errorData = {
            message: error.message,
            stack: error.stack,
          };
        } else {
          // Handle Other Errors
          errorData = {
            message: error.message || 'An unknown error occurred',
          };
        }

        console.error('An error occurred:', error);

        this.dialog.open(ErrorDialogComponent, {
          data: errorData,
        });
      });
    } else {
      // Rethrow the error to be caught by Angular's default error handler
      throw error;
    }
  }
}
