import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatIcon } from '@angular/material/icon';

import { data, DEFAULT_REGION, KEY_REGION, ListItem } from '../../../../../lib';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardContent, MatCardActions, MatCardFooter, MatChipSet, MatChip, MatButton, MatCardImage, RouterLink, TranslateModule, MatIcon],
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
  region = signal(new URLSearchParams(window.location.search).get(KEY_REGION) || DEFAULT_REGION);
  listing: ListItem[] = data[this.region()];

  isMobile(): boolean {
    return window.innerWidth < window.innerHeight;
  }
}
