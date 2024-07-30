import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  async ngOnInit() {
    try {
      const response = await fetch('https://google.com');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      throw new Error();
    }
  }

  _click() {
    throw new Error('Method not implemented.');
  }
}