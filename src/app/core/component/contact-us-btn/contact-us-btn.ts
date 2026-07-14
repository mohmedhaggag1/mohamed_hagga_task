import { Component } from '@angular/core';

@Component({
  selector: 'contact-us-btn',
  imports: [],
  templateUrl: './contact-us-btn.html',
  styleUrl: './contact-us-btn.scss',
})
export class ContactUsBtn {
   contactData = {
    image: '/images/contact-us/Contact-Image.png',
    phone: 'اتصل بنا',
    whatsapp: 'تواصل معنا'
  };
}
