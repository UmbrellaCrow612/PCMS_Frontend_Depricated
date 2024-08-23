import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../environments/environment';

interface Case {
  id: number;
  name: string;
  // Add other properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  constructor(private http: HttpClient) {}

  getCases(): Observable<Case[]> {
    const url = new URL('/cases', environment.apiUrl);
    // Add query parameters if needed
    url.searchParams.set('filter', 'active');

    return this.http.get(url.toString())
      .pipe(
        catchError(error => {
          console.error('Error fetching cases:', error);
          return throwError(() => new Error('Failed to fetch cases'));
        }),
        map((cases: any[]) => {
          // Validate each case object against the Case interface
          const validatedCases = cases.filter(caseData => {
            const caseObject = caseData as Case;
            return !!caseObject &&
              typeof caseObject.id === 'number' &&
              typeof caseObject.name === 'string';
          });

          if (validatedCases.length !== cases.length) {
            throw new Error('Invalid case data received');
          }

          return validatedCases;
        })
      );
  }
}
