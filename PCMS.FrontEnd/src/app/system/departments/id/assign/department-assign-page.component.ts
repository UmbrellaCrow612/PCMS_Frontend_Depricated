import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-assign-page',
  standalone: true,
  imports: [],
  templateUrl: './department-assign-page.component.html',
  styleUrl: './department-assign-page.component.scss',
})
export class DepartmentAssignPageComponent implements OnInit {
  departmentId: any;

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.departmentId = params.get('id');
    });
    this.titleService.setTitle("PCMS - Assign Officers for " +this.departmentId);
  }
}
