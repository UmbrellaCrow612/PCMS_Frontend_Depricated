import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-bottom-sheet',
  standalone: true,
  imports: [MatListModule, RouterLink, MatIconModule],
  templateUrl: './mobile-bottom-sheet.component.html',
  styleUrl: './mobile-bottom-sheet.component.scss',
})
export class MobileBottomSheetComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { parentRoute: ActivatedRoute }
  ) {}
}
