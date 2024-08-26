import { Component, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatMiniFabButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { CumminComponent, data, DEFAULT_REGION, KEY_REGION, ListItem } from '../../../../../lib';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardContent, MatCardActions, MatCardFooter, MatChipSet, MatChip, MatCardImage, RouterLink, TranslateModule, MatIcon, NgOptimizedImage, MatMiniFabButton, CumminComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
  animations:[
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30%)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ])
  ]
})
export class ListingComponent {
  region = signal(new URLSearchParams(window.location.search).get(KEY_REGION));
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  listing: ListItem[] = this.region() ? data[this.region()] : Object.values(data).flat();

  isMobile(): boolean {
    return window.innerWidth < window.innerHeight;
  }
  
  goTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  protected readonly DEFAULT_REGION = DEFAULT_REGION;
}
