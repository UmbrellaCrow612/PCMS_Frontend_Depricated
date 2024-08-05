import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-id-page',
  standalone: true,
  imports: [],
  templateUrl: './department-id-page.component.html',
  styleUrl: './department-id-page.component.scss',
})
export class DepartmentIdPageComponent implements OnInit {
  isPageLoading: boolean = true;
  // Have states for different views like error , not found etc
  departmentId: string | null = null;
  department: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.isPageLoading = false;
    this.route.paramMap.subscribe((params) => {
      this.departmentId = params.get('id');
    });
  }
}
