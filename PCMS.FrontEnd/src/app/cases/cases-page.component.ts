import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';

import { MobileBottomSheetComponent } from './components/mobile-bottom-sheet/mobile-bottom-sheet.component';
@Component({
  selector: 'app-cases-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatBottomSheetModule,
  ],
  templateUrl: './cases-page.component.html',
  styleUrl: './cases-page.component.scss',
})
export class CasesPageComponent {
  private _bottomSheet = inject(MatBottomSheet);
  private _activeRoute = inject(ActivatedRoute);

  openBottomSheet() {
    this._bottomSheet.open(MobileBottomSheetComponent, {
      data: { parentRoute: this._activeRoute },
    });
  }
}
