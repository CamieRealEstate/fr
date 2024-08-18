import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, FooterComponent, ListingComponent } from './@ui';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ListingComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations: [
    trigger('slowFadeInTop', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30%)' }),
        animate('1200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ]
})
export class LayoutComponent {}
