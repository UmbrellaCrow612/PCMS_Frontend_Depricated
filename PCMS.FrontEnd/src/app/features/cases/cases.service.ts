import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Case } from './interfaces';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CasesService {
  constructor(private http: HttpClient) {}

  getCases(): Observable<Case[]> {
    let url = new URL('/cases', environment.apiUrl).toString();

    return this.http.get<Case[]>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
