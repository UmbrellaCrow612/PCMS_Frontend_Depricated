import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-officer-id-page',
  standalone: true,
  imports: [],
  templateUrl: './officer-id-page.component.html',
  styleUrl: './officer-id-page.component.scss',
})
export class OfficerIdPageComponent implements OnInit {
  OfficerId: any = '';
  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.OfficerId = id;
    this.titleService.setTitle(
      'PCMS - Officer details for ' + this.OfficerId
    );
  }


  editedOfficerForm = ""
}
