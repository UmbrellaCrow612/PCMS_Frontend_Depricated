import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-unassign-page',
  standalone: true,
  imports: [],
  templateUrl: './department-unassign-page.component.html',
  styleUrl: './department-unassign-page.component.scss',
})
export class DepartmentUnassignPageComponent implements OnInit {
  departmentId: any;

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.departmentId = params.get('id');
    });
    this.titleService.setTitle(this.departmentId);
  }
}
