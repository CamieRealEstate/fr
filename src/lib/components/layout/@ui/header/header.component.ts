import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { LanguageComponent, DEFAULT_LANG, KEY_LANG, langs } from '../../../@ui';

import { links } from './header.entities';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIcon, MatFormField, MatSelect, MatOption, MatLabel, FormsModule, TranslateModule, RouterLinkActive, LanguageComponent],
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
  
  readonly langs = langs;
  readonly links = links;
  readonly isMobile = window.innerWidth < window.innerHeight;
  lang = signal(localStorage.getItem(KEY_LANG) || DEFAULT_LANG);
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
    this.cdr.detectChanges();
  }

  changeLanguage(language: string) {
    localStorage.setItem('lang', language);
    this.translate.setDefaultLang(language);
    this.isMenuOpen.set(!this.isMenuOpen());
    this.cdr.detectChanges();
  }
}
