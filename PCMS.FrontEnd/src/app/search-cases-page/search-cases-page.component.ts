import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface CaseStatusOption {
  status: string;
}

@Component({
  selector: 'app-search-cases-page',
  templateUrl: './search-cases-page.component.html',
  styleUrl: './search-cases-page.component.css',
})
export class SearchCasesPageComponent {
  SearchCaseNumberInput = new FormControl('', [
    Validators.minLength(8),
    Validators.maxLength(30),
    Validators.pattern(/^CA/),
  ]);

  /* Form group for optional fields  */

  CaseStatusOptions: CaseStatusOption[] = [
    { status: 'Open' },
    { status: 'Closed' },
    { status: 'Pending' },
    { status: 'Under Investigation' },
  ];

  CaseStatusSelectControl = new FormControl<CaseStatusOption | string>(
    this.CaseStatusOptions[0].status
  );
}
