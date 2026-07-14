import { Component } from '@angular/core';
import { ContactUsBtn } from "../contact-us-btn/contact-us-btn";

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [ContactUsBtn],
})
export class Navbar {

  links = [
    { title: 'وصف المشروع', href: '#description' },
    { title: 'معرض الصور', href: '#gallery' },
    { title: 'المميزات', href: '#features' },
    { title: 'الموقع', href: '#location' },
  ];

}