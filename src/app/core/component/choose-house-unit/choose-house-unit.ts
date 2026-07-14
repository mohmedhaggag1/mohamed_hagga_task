import { Component } from '@angular/core';

@Component({
  selector: 'choose-house-unit',
  imports: [],
  templateUrl: './choose-house-unit.html',
  styleUrl: './choose-house-unit.scss',
})
export class ChooseHouseUnit {
   data = [
  {
    icon: '/images/icons/octicon_verified.png',
    title: 'حالة المشروع',
    value: 'جاهز للسكن',
    subTitle: 'معاينة على الطبيعة',
  },
  {
    icon: '/images/icons/location.png',
    title: 'الموقع',
    value: 'جدة ـ حي الزهراء',
    subTitle: 'عرض على الخريطة',
  },
  {
    icon: '/images/icons/building.png',
    title: 'عدد الشقق',
    value: '350 شقة',
    subTitle: 'إجمالي الشقق',
  },
  {
    icon: '/images/icons/calender.png',
    title: 'تاريخ التسليم ',
    value: 'جاهز للسكن',
    subTitle: 'جاهز الآن',
  },
  {
    icon: '/images/icons/tabler_cube.png',
    title: 'المساحة المنبية',
    value: '210 م²',
    subTitle: 'لكل شقة',
  }
];
}
