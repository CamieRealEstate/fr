import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { data, DEFAULT_REGION, KEY_REGION, HeaderComponent, ListItem } from '../../../lib';

import { KEY_ITEM } from './detail.entities';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslateModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  item = signal(new URLSearchParams(window.location.search).get(KEY_ITEM));
  region = signal(new URLSearchParams(window.location.search).get(KEY_REGION) || DEFAULT_REGION);
  data: ListItem = data[this.region()].find(item => item.id.toString() === this.item()) || { id: 0 };
  currentDate = new Date().toLocaleDateString();
}
