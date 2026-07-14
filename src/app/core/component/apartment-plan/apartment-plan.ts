import { Component } from '@angular/core';

@Component({
  selector: 'apartment-plan',
  standalone: true,
  imports: [],
  templateUrl: './apartment-plan.html',
  styleUrl: './apartment-plan.scss',
})
export class ApartmentPlan {
  plans = [
    {
      title: 'مخطط البرج',
      image: '/images/apperant/Floor1.png',
      active: true,
    },
    {
      title: 'مخطط الدور',
      image: '/images/apperant/Floor2.png',
      active: false,
    },
    {
      title: 'مخطط الشقة',
      image: '/images/apperant/Floor3.png',
      active: false,
    },
    {
      title: 'الموقع العام',
      image: '/images/apperant/Floor4.png',
      active: false,
    }
  ];
}