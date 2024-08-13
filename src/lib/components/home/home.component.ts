import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  getLandingPageImgSrc(): string {
    if (window.innerWidth > window.innerHeight) {
      return 'landing-page-desktop.jpg';
    } else {
      return 'landing-page-mobile.jpg';
    }
  }
}