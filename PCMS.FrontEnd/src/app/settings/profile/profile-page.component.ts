import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../theme/theme-service.service';
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [MatDividerModule, MatSlideToggleModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  isDarkMode: boolean = false;
  private subscription: Subscription | undefined;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.subscription = this.themeService
      .getDarkMode()
      .subscribe((isDarkMode) => {
        this.isDarkMode = isDarkMode;
      });
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
