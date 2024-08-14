import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from '../layout';

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, HeaderComponent, RouterLink, TranslateModule],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.scss'
})
export class RegionsComponent {
  isMobile(): boolean {
    return window.innerWidth < window.innerHeight;
  }
}
