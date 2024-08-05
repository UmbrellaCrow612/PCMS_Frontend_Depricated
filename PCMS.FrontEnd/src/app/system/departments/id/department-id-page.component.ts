import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  departmentId:any; // set the dep name to the title 
  department: any;

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.isPageLoading = false;
    this.route.paramMap.subscribe((params) => {
      this.departmentId  = params.get('id');
    });
    this.titleService.setTitle(this.departmentId)
  }
}
