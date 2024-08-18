import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DEFAULT_REGION, KEY_REGION, ListItem } from './listing.entities';
import { data } from './data/data';
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

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardContent, MatCardActions, MatCardFooter, MatChipSet, MatChip, MatButton, MatCardImage, RouterLink, TranslateModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent implements OnInit {
  region = signal(new URLSearchParams(window.location.search).get(KEY_REGION) || DEFAULT_REGION);
  listing: any = data[this.region()];

  isMobile(): boolean {
    return window.innerWidth < window.innerHeight;
  }

  ngOnInit() {
    console.log('=>(listing.component.ts:17) listing', this.listing);
  }
}
