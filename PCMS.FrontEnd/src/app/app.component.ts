import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeService } from './core/theme/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
})
export class AppComponent {
  isDarkMode: boolean = false;
  private subscription: Subscription | undefined;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.subscription = this.themeService
      .getDarkMode()
      .subscribe((isDarkMode) => {
        this.isDarkMode = isDarkMode;
        if (isDarkMode) {
          document.body.classList.add('demo-unicorn-dark-theme');
        } else {
          document.body.classList.remove('demo-unicorn-dark-theme');
        }
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
