import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from '../layout';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
