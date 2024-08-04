import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly DARK_MODE_KEY = 'darkMode';
  private darkMode = new BehaviorSubject<boolean>(this.loadDarkModePreference());
  isDarkMode$ = this.darkMode.asObservable();

  constructor() {
    this.darkMode.subscribe((isDarkMode) => {
      this.applyDarkModeClass(isDarkMode);
      this.saveDarkModePreference(isDarkMode);
    });
  }

  toggleDarkMode() {
    this.darkMode.next(!this.darkMode.value);
  }

  private loadDarkModePreference(): boolean {
    const savedPreference = localStorage.getItem(this.DARK_MODE_KEY);
    return savedPreference ? JSON.parse(savedPreference) : false;
  }

  private saveDarkModePreference(isDarkMode: boolean) {
    localStorage.setItem(this.DARK_MODE_KEY, JSON.stringify(isDarkMode));
  }

  private applyDarkModeClass(isDarkMode: boolean) {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
