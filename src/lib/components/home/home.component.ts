import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { LanguageComponent } from '../@ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, TranslateModule, LanguageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations:[
    trigger('quickFadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30%)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30%)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
    ]),
    trigger('slowFadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30%)' }),
        animate('1200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('quickFadeInTop', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30%)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInTop', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30%)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('slowFadeInTop', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30%)' }),
        animate('1200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('slowerFadeInTop', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30%)' }),
        animate('1600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ]
})
export class HomeComponent {
  isMobile(): boolean {
    return window.innerWidth < window.innerHeight;
  }
}