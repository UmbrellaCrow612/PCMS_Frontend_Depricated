import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
}
