import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from '../layout';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, HeaderComponent, RouterLink, TranslateModule],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.scss',
  animations: [
    trigger('quickFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
    ]),
    trigger('slowFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class RegionsComponent {
  isMobile(): boolean {
    return window.innerWidth < window.innerHeight;
  }
}
