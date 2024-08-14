import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);

  lang = signal(localStorage.getItem('lang') || 'en');
  title = 'camie-real-estate';

  ngOnInit() {
    const lang = new URLSearchParams(window.location.search).get('lang') || this.lang();
    
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
  }
}