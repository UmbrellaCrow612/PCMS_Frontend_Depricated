import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Case } from '../../interfaces';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-report-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './create-report-page.component.html',
  styleUrl: './create-report-page.component.scss',
})
export class CreateReportPageComponent implements OnDestroy {
  @ViewChild('caseInput')
  caseInput!: ElementRef<HTMLInputElement>;

  destroyed = new Subject<void>();
  isMobile: boolean = false;

  readonly minDate = new Date(
    new Date().setFullYear(new Date().getFullYear() - 20)
  );
  readonly maxDate = new Date();

  cases: Case[] = [
    {
      id: 123,
      name: 'One Case',
    },
    {
      id: 321,
      name: 'Two Case',
    },
  ];
  filteredCasesOptions: Case[] = [];

  reportForm = new FormGroup({
    case: new FormControl('', [Validators.required]),
    incident: new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      occurrenceDate: new FormControl(new Date(), [Validators.required]),
      location: new FormControl('', [Validators.required]),
    }),
    details: new FormControl('', [Validators.required]),
  });

  constructor() {
    this.filteredCasesOptions = this.cases.slice();
    inject(BreakpointObserver)
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        if (result.matches) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });
  }

  filterCases() {
    const filterValue = this.caseInput.nativeElement.value.toLowerCase();
    this.filteredCasesOptions = this.cases.filter((o) =>
      o.name.toLowerCase().includes(filterValue)
    );
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  clearForm() {
    this.reportForm.reset();
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
