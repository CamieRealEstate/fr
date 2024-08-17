import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { DEFAULT_LANG, KEY_LANG, langs } from './language.entities';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule, MatFormField, MatOption, MatSelect, FormsModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent {
  private translate = inject(TranslateService);
  readonly langs = langs;
  lang = signal(localStorage.getItem(KEY_LANG) || DEFAULT_LANG);

  changeLang(language: string) {
    localStorage.setItem(KEY_LANG, language);
    this.translate.setDefaultLang(language);
  }
}
