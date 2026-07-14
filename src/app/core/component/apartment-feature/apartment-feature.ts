import { Component } from '@angular/core';
import { FeatureCard } from '../feature-card/feature-card';

@Component({
  selector: 'apartment-features',
  imports: [FeatureCard],
  templateUrl: './apartment-feature.html',
  styleUrl: './apartment-feature.scss',
})
export class ApartmentFeatures {

  apartmentFeatures = [
    {
      icon: 'images/features/home2.png',
      label: 'حالة الشقة',
      value: 'جاهزة',
    },
    {
      icon: 'images/features/chen.png',
      label: 'نوع المطبخ',
      value: 'مطبخ مفتوح',
    },
    {
      icon: 'images/features/ac.png',
      label: 'نوع التكييفات',
      value: 'تكييفات مركزية',
    },
    {
      icon: 'images/features/diamond.png',
      label: 'نوع التشطيب',
      value: 'فاخر',
    },
    {
      icon: 'images/features/bed.png',
      label: 'عدد الغرف',
      value: '3 غرف نوم',
    },
    {
      icon: 'images/features/car.png',
      label: 'موقف السيارات',
      value: 'موقف خاص',
    },
  ];

  projectFeatures = [
    {
      icon: 'images/features/home.png',
      label: '',
      value: 'أمن على مدار الساعة',
    },
    {
      icon: 'images/features/swimming-pool.png',
      label: '',
      value: 'حمامات سباحة',
    },
    {
      icon: 'images/features/garden.png',
      label: '',
      value: 'حدائق عامة',
    },
    {
      icon: 'images/features/fitness.png',
      label: '',
      value: 'نادي رياضي',
    },
    {
      icon: 'images/features/walk.png',
      label: '',
      value: 'مسارات مشي',
    },
    {
      icon: 'images/features/wifi-angle.png',
      label: '',
      value: 'دخول ذكي',
    },
    {
      icon: 'images/features/security-camera.png',
      label: '',
      value: 'موقف خاص',
    },
    {
      icon: 'images/features/mosque.png',
      label: '',
      value: 'مسجد',
    },
    {
      icon: 'images/features/symbols_parking.png',
      label: '',
      value: 'كاميرات مراقبة',
    },
  ];

}