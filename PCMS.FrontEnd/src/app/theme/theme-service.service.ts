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
      this.saveDarkModePreference(isDarkMode);
    });
  }

  toggleDarkMode() {
    this.darkMode.next(!this.darkMode.value);
  }

  private loadDarkModePreference(): boolean {
    try {
      const savedPreference = localStorage.getItem(this.DARK_MODE_KEY);
      if (savedPreference === null) {
        return false; // Default to light mode if no preference is saved
      }
      
      // Try to parse as boolean
      if (savedPreference.toLowerCase() === 'true') {
        return true;
      } else if (savedPreference.toLowerCase() === 'false') {
        return false;
      }
      
      // If not a boolean string, try to parse as JSON
      const parsedValue = JSON.parse(savedPreference);
      if (typeof parsedValue === 'boolean') {
        return parsedValue;
      }
      
      // If parsed value is not a boolean, log a warning and return default
      console.warn(`Invalid dark mode preference: ${savedPreference}. Defaulting to light mode.`);
      return false;
    } catch (error) {
      console.error('Error loading dark mode preference:', error);
      return false; // Default to light mode on error
    }
  }

  private saveDarkModePreference(isDarkMode: boolean) {
    try {
      localStorage.setItem(this.DARK_MODE_KEY, JSON.stringify(isDarkMode));
    } catch (error) {
      console.error('Error saving dark mode preference:', error);
    }
  }
}