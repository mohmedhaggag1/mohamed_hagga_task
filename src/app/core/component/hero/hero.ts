import { Component } from '@angular/core';
import { ContactUsBtn } from "../contact-us-btn/contact-us-btn";

@Component({
  selector: 'app-hero',
  imports: [ContactUsBtn],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
