import { Component } from '@angular/core';

@Component({
  selector: 'mmw-home-page',
  styleUrls: ['home.scss'],
  templateUrl: 'home.html'
})
export class HomeComponent {
  pageHeader: any;
  message: string;

  constructor() {
    this.message = 'Welcome to my website';
  }

  openModalWindow: boolean = false;
  imagePointer: number;
  images = [
    {
      thumb: 'assets/images/gallery/thumbs/img1.jpg',
      img: 'assets/images/gallery/img1.jpg',
      description: 'Image 1'
    },
    {
      thumb: 'assets/images/gallery/thumbs/img2.jpg',
      img: 'assets/images/gallery/img2.jpg',
      description: 'Image 2'
    },
    {
      thumb: 'assets/images/gallery/thumbs/img3.jpg',
      img: 'assets/images/gallery/img3.jpg',
      description: 'Image 3'
    },
    {
      thumb: 'assets/images/gallery/thumbs/img4.jpg',
      img: 'assets/images/gallery/img4.jpg',
      description: 'Image 4'
    },
    {
      thumb: 'assets/images/gallery/thumbs/img5.jpg',
      img: 'assets/images/gallery/img5.jpg',
      description: 'Image 5'
    }
  ];

  openImageModal(imageSrc, images) {
    let imageModalPointer;
    for (let i = 0; i < images.length; i++) {
      if (imageSrc === images[i].img) {
        imageModalPointer = i;
        break;
      }
    }
    this.openModalWindow = true;
    this.images = images;
    this.imagePointer = imageModalPointer;
  }

  cancelImageModal() {
    this.openModalWindow = false;
  }
}
