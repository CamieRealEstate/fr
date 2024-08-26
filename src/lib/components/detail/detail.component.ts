import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { data, DEFAULT_REGION, KEY_REGION, HeaderComponent, ListItem, Layout, FooterComponent } from '../../../lib';

import { KEY_ITEM } from './detail.entities';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatButton, MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslateModule, NgOptimizedImage, MatIcon, MatButton, MatFabButton, MatMiniFabButton, MatTooltip, FooterComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-20%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(-10%)', opacity: 0 }))
      ])
    ]),
    trigger('fadeInTopFast', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-5%)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInTopSlow', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-5%)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class DetailComponent {
  item = signal(new URLSearchParams(window.location.search).get(KEY_ITEM));
  region = signal(new URLSearchParams(window.location.search).get(KEY_REGION) || DEFAULT_REGION);

  data: ListItem = data[this.region()].find(item => item.id.toString() === this.item()) || { id: 0, region: 'NK' };
  currentDate = new Date().toLocaleDateString();
  showDetail = false;

  get buttonText(): string {
    return this.showDetail ? 'Hide' : 'Show more';
  }

  toggleImageVisibility(img: Layout) {
    img.imgVisible = !img.imgVisible;
  }

  toggleDetailVisibility() {
    this.showDetail = !this.showDetail;
  }

  goTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
