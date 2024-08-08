import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationComponent } from './confirmation.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  constructor(private dialog: MatDialog) {}

  confirm(message: string): Observable<{ confirmed: boolean }> {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: { message },
    });

    return dialogRef.afterClosed();
  }
}
