import { Component, HostListener, signal } from '@angular/core';
import { Navbar } from './core/component/navbar/navbar';
import { DownloadPdf } from './core/component/download-pdf/download-pdf';
import { ApartmentPlan } from './core/component/apartment-plan/apartment-plan';
import { ContactUs } from "./core/component/contact-us/contact-us";
import { Location } from "./core/component/location/location";
import { ApartmentFeatures } from "./core/component/apartment-feature/apartment-feature";
import { Hero } from "./core/component/hero/hero";
import { ChooseHouseUnit } from "./core/component/choose-house-unit/choose-house-unit";
import { Gallary } from "./core/component/gallary/gallary";

@Component({
  selector: 'app-root',
  imports: [Navbar, DownloadPdf, ApartmentPlan, ContactUs, Location, ApartmentFeatures, Hero, ChooseHouseUnit, Gallary],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   showScrollTop = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
