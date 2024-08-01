import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';

@Component({
    selector: 'app-not-found-page',
    templateUrl: './not-found-page.component.html',
    styleUrl: './not-found-page.component.css',
    standalone: true,
    imports: [MatAnchor, RouterLink]
})
export class NotFoundPageComponent {

}
