import { Component } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'location',
  imports: [],
  templateUrl: './location.html',
  styleUrl: './location.scss',
})
export class Location {
  // mapUrl: SafeResourceUrl;

  locationData = {
    title: 'الموقع',
    address: 'جدة، حي الزهراء',
    description: 'موقع استراتيجي بالقرب من الخدمات الرئيسية والطرق الحيوية',
    map: '/images/contact-us/Map.png'
  };

  //  constructor(private sanitizer: DomSanitizer) {
  //   this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
  //     'https://www.google.com/maps?q=Jeddah+Saudi+Arabia&output=embed'
  //   );
  // }
}