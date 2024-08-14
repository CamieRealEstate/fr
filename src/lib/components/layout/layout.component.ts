import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, FooterComponent, ListingComponent } from './@ui';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ListingComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
