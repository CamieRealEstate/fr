import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cummin',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './cummin.component.html',
  styleUrl: './cummin.component.scss',
  animations:[
    trigger('slowerFadeInTop', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-21%) scale(0.9)' }),
        animate('1500ms cubic-bezier(0.25, 1.25, 0.5, 1)', 
          style({ opacity: 1, transform: 'translateY(0) scale(1)' })
        ),
      ]),
    ]),
  ]
})
export class CumminComponent {}
