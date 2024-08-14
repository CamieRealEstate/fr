import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Lang {
  code: string;
  name: string;
  icon: string;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIcon, MatFormField, MatSelect, MatOption, MatLabel, FormsModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  private cdr = inject(ChangeDetectorRef);
  private translate = inject(TranslateService);
  readonly langs: Lang[] = [
    { code: 'en', name: 'English', icon: 'en.png' },
    { code: 'vi', name: 'Tiếng Việt', icon: 'vi.png' },
  ];
  readonly isMobile = window.innerWidth < window.innerHeight;
  lang = signal(new URLSearchParams(window.location.search).get('lang') || 'en');
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
    this.cdr.detectChanges();
  }

  changeLanguage(language: string) {
    this.translate.setDefaultLang(language);
    this.isMenuOpen.set(!this.isMenuOpen());
    this.cdr.detectChanges();
  }
}
