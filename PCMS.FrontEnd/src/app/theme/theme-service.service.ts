import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(true);
  isDarkMode$ = this.darkMode.asObservable();

  toggleDarkMode() {
    this.darkMode.next(!this.darkMode.value);
  }
}
