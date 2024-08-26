import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
})
export class NotFoundPageComponent implements OnInit {
  constructor(private location: Location, private title: Title) {}
  ngOnInit(): void {
    this.title.setTitle('PCMS - Not Found');
  }

  goBack() {
    this.location.back();
  }
}
