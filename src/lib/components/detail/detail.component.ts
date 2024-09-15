import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatButton, MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { data, DEFAULT_REGION, KEY_REGION, HeaderComponent, ListItem, Layout, FooterComponent } from '../../../lib';
import { ContactComponent } from '../@ui/contact/contact.component';

import { KEY_ITEM } from './detail.entities';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslateModule, NgOptimizedImage, MatIcon, MatButton, MatFabButton, MatMiniFabButton, MatTooltip, FooterComponent, ContactComponent],
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
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInTopSlow', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-5%)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class DetailComponent {
  constructor(private dialog: MatDialog) {
  }

  item = signal(new URLSearchParams(window.location.search).get(KEY_ITEM));
  region = signal(new URLSearchParams(window.location.search).get(KEY_REGION) || DEFAULT_REGION);

  data: ListItem = data[this.region()].find(item => item.id.toString() === this.item()) || { id: 0, region: 'NK' };
  currentDate = new Date().toLocaleDateString();
  showDetail = false;

  get buttonText(): string {
    return this.showDetail ? 'Hide' : 'Show more';
  }

  openLargeImage(image: any) {
    const dialogRef = this.dialog.open(LargeImageViewDialogComponent, {
      data: { url: image.url }
    });
  }

  toggleImageVisibility(img: Layout) {
    img.imgVisible = !img.imgVisible;
  }

  toggleDetailVisibility() {
    this.showDetail = !this.showDetail;
  }

  goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

@Component({
  selector: 'app-large-image-view-dialog',
  template: `
    <div class="dialog-content">
      <img src="{{imageUrl}}" alt="Large Image" style="width: 100%; height: 100%">
    </div>
  `,
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})
export class LargeImageViewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public img: any) {
    this.imageUrl = this.img.url;
  }

  imageUrl: string;
}