import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-system-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './system-page.component.html',
  styleUrl: './system-page.component.css',
})
export class SystemPageComponent {}
