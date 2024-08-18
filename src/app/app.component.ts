import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { DEFAULT_LANG, KEY_LANG } from '../lib';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);

  lang = signal(localStorage.getItem(KEY_LANG) || DEFAULT_LANG);
  title = 'camie-real-estate';

  ngOnInit() {
    const lang = new URLSearchParams(window.location.search).get(KEY_LANG) || this.lang();
    
    localStorage.setItem(KEY_LANG, lang);
    this.translate.setDefaultLang(lang);
  }
}