import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../../confirmation/confirmation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  constructor(private confirmationDialogService: ConfirmationDialogService) {}

  confirmAction(): void {
    this.confirmationDialogService
      .confirm('Are you sure?')
      .subscribe((result) => {
        if (result.confirmed) {
          // Perform the action
          console.log('Action confirmed');
        } else {
          // Cancel the action
          console.log('Action canceled');
        }
      });
  }

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
