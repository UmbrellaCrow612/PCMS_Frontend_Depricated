import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

interface Case {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CasesService {
  
  constructor(private http: HttpClient) {}

  getCases(): Observable<Case[]> {
    const url = new URL('/cases', environment.apiUrl).toString();

    return this.http.get<Case[]>(url).pipe(
      map((response: Case[]) => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
