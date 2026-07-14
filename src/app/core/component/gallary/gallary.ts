import { Component } from '@angular/core';

@Component({
  selector: 'gallary',
  imports: [],
  templateUrl: './gallary.html',
  styleUrl: './gallary.scss',
})
export class Gallary {

  gallaryImages = [
      {
      id: 1,
      src: '/images/gallary/img1.png',
      active: true,
    },
  
    {
      id: 2,
      src: '/images/gallary/img2.png',
      active: false
    },
    {
      id: 3,
      src: '/images/gallary/img3.png',
      active: false
    },
    {
      id: 4,
      src: '/images/gallary/img4.png',
      active: false
    },
    {
      id: 5,
      src: '/images/gallary/img5.png',
      active: false
    }
  ];

  currentIndex = 0;

  get selectedImage() {
    return this.gallaryImages[this.currentIndex].src;
  }

  nextImage() {
    this.currentIndex++;

    if (this.currentIndex >= this.gallaryImages.length) {
      this.currentIndex = 0;
    }
  }

  prevImage() {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.gallaryImages.length - 1;
    }
  }

  selectImage(index: number) {
    this.currentIndex = index;
  }
}