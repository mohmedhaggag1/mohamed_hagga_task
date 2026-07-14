import { Component } from '@angular/core';
import { ContactUsBtn } from "../contact-us-btn/contact-us-btn";

@Component({
  selector: 'contact-us',
  imports: [ContactUsBtn],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
   
  contactData = {
    title: 'تواصل معنا',
    description: 'للاستفسار او حجز موعد للمعاينة',
    image: '/images/contact-us/Contact-Image.png',
    phone: 'اتصل بنا',
    whatsapp: 'تواصل معنا'
  };

}
