import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HeaderComponent } from '../layout';

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, HeaderComponent],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.scss',
})
export class RegionsComponent {}
