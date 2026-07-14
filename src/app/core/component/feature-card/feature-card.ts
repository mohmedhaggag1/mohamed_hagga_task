import { Component, Input } from '@angular/core';

@Component({
  selector: 'feature-card',
  standalone: true,
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss',
})
export class FeatureCard {

  @Input() title!: string;

  @Input() items: {
    icon: string;
    label: string;
    value: string;
  }[] = [];
 
 @Input() changeStyle: boolean = false;
}