import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly STORAGE_KEY = 'darkMode';
  private darkModeSubject: BehaviorSubject<boolean>;

  constructor() {
    const storedPreference = localStorage.getItem(this.STORAGE_KEY);
    const initialValue = storedPreference
      ? JSON.parse(storedPreference)
      : false;
    this.darkModeSubject = new BehaviorSubject<boolean>(initialValue);
  }

  getDarkMode() {
    return this.darkModeSubject.asObservable();
  }

  toggleDarkMode() {
    const newValue = !this.darkModeSubject.value;
    this.darkModeSubject.next(newValue);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newValue));
  }
}
