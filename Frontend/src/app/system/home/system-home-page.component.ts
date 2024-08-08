import { Component } from '@angular/core';
import { ThemeService } from '../../theme/theme-service.service';

@Component({
  selector: 'app-system-home-page',
  standalone: true,
  imports: [],
  templateUrl: './system-home-page.component.html',
  styleUrl: './system-home-page.component.scss',
})
export class SystemHomePageComponent {
  constructor(private themeService: ThemeService) {}

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
