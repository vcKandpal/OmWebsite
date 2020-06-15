import { Component, OnInit, Input, OnChanges } from '@angular/core';

// import {
//   NgxGalleryOptions,
//   NgxGalleryImage,
//   NgxGalleryAnimation,
// } from 'ngx-gallery';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-image-gallery-page',
  templateUrl: './image-gallery-page.component.html',
  styleUrls: ['./image-gallery-page.component.css'],
})
export class ImageGalleryPageComponent implements OnInit, OnChanges {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  @Input('componentName') componentName;

  constructor() {}
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log('Changes  111:', changes.componentName.currentValue);
    this.componentName = changes.componentName.currentValue;
    this.doFilterGalleryImg();
  }

  ngOnInit(): void {
    this.all = this.bookExhibitionImgs.concat(this.goushalaImgs);
    console.log(
      this.componentName,
      ' ...............................................................'
    );
    console.log('all test ', this.all);
    this.galleryOptions = [
      {
        width: '70%',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '400px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.doFilterGalleryImg();
  }

  all = [];

  goushalaImgs = [
    {
      small: '/assets/img/goushala/gaushala001.jpg',
      medium: '/assets/img/goushala/gaushala001.jpg',
      big: '/assets/img/goushala/gaushala001.jpg',
    },
    {
      small: '/assets/img/goushala/gaushala003.jpg',
      medium: '/assets/img/goushala/gaushala003.jpg',
      big: '/assets/img/goushala/gaushala003.jpg',
    },
    {
      small: '/assets/img/goushala/gushala002.jpg',
      medium: '/assets/img/goushala/gushala002.jpg',
      big: '/assets/img/goushala/gushala002.jpg',
    },
    {
      small: '/assets/img/goushala/gaushala004.jpg',
      medium: '/assets/img/goushala/gaushala004.jpg',
      big: '/assets/img/goushala/gaushala004.jpg',
    },
    {
      small: '/assets/img/goushala/gaushala004.jpg',
      medium: '/assets/img/goushala/gaushala004.jpg',
      big: '/assets/img/goushala/gaushala004.jpg',
    },
    {
      small: '/assets/img/goushala/gaushala006.jpg',
      medium: '/assets/img/goushala/gaushala006.jpg',
      big: '/assets/img/goushala/gaushala006.jpg',
    },
    {
      small: '/assets/img/goushala/gaushala007.jpg',
      medium: '/assets/img/goushala/gaushala007.jpg',
      big: '/assets/img/goushala/gaushala007.jpg',
    },
    {
      small: '/assets/img/goushala/kamdhenu.jpg',
      medium: '/assets/img/goushala/kamdhenu.jpg',
      big: '/assets/img/goushala/kamdhenu.jpg',
    },
    {
      small: 'assets/img/goushala/krishanaCow.jpg',
      medium: 'assets/img/goushala/krishanaCow.jpg',
      big: 'assets/img/goushala/krishanaCow.jpg',
    },
    {
      small: '/assets/img/booksgp.jpg',
      medium: '/assets/img/booksgp.jpg',
      big: '/assets/img/booksgp.jpg',
    },
  ];

  bookExhibitionImgs: NgxGalleryImage[] = [
    {
      small: '/assets/img/books/bo0ks018.jpg',
      medium: '/assets/img/books/bo0ks018.jpg',
      big: '/assets/img/books/bo0ks018.jpg',
    },
    {
      small: '/assets/img/books/boks002.jpg',
      medium: '/assets/img/books/boks002.jpg',
      big: '/assets/img/books/boks002.jpg',
    },
    {
      small: '/assets/img/books/book007.jpg',
      medium: '/assets/img/books/book007.jpg',
      big: '/assets/img/books/book007.jpg',
    },
    {
      small: '/assets/img/books/book008.jpg',
      medium: '/assets/img/books/book008.jpg',
      big: '/assets/img/books/book008.jpg',
    },
    {
      small: '/assets/img/books/book009.jpg',
      medium: '/assets/img/books/book009.jpg',
      big: '/assets/img/books/book009.jpg',
    },
    {
      small: '/assets/img/books/books001.jpg',
      medium: '/assets/img/books/books001.jpg',
      big: '/assets/img/books/books001.jpg',
    },
    {
      small: '/assets/img/books/books003.jpg',
      medium: '/assets/img/books/books003.jpg',
      big: '/assets/img/books/books003.jpg',
    },
    {
      small: '/assets/img/books/books004.jpg',
      medium: '/assets/img/books/books004.jpg',
      big: '/assets/img/books/books004.jpg',
    },
    {
      small: '/assets/img/books/books005.jpg',
      medium: '/assets/img/books/books005.jpg',
      big: '/assets/img/books/books005.jpg',
    },
    {
      small: '/assets/img/books/books006.jpg',
      medium: '/assets/img/books/books006.jpg',
      big: '/assets/img/books/books006.jpg',
    },
    {
      small: '/assets/img/books/books008.jpg',
      medium: '/assets/img/books/books008.jpg',
      big: '/assets/img/books/books008.jpg',
    },
    {
      small: '/assets/img/books/books009.jpg',
      medium: '/assets/img/books/books009.jpg',
      big: '/assets/img/books/books009.jpg',
    },
    {
      small: '/assets/img/books/books010.jpg',
      medium: '/assets/img/books/books010.jpg',
      big: '/assets/img/books/books010.jpg',
    },
    {
      small: '/assets/img/books/books011.jpg',
      medium: '/assets/img/books/books011.jpg',
      big: '/assets/img/books/books011.jpg',
    },
    {
      small: '/assets/img/books/books012.jpg',
      medium: '/assets/img/books/books012.jpg',
      big: '/assets/img/books/books012.jpg',
    },
    {
      small: '/assets/img/books/books013.jpg',
      medium: '/assets/img/books/books013.jpg',
      big: '/assets/img/books/books013.jpg',
    },
    {
      small: '/assets/img/books/books014.jpg',
      medium: '/assets/img/books/books014.jpg',
      big: '/assets/img/books/books014.jpg',
    },
    {
      small: '/assets/img/books/books016.jpg',
      medium: '/assets/img/books/books016.jpg',
      big: '/assets/img/books/books016.jpg',
    },
    {
      small: '/assets/img/books/books008.jpg',
      medium: '/assets/img/books/books008.jpg',
      big: '/assets/img/books/books008.jpg',
    },
    {
      small: '/assets/img/books/books017.jpg',
      medium: '/assets/img/books/books017.jpg',
      big: '/assets/img/books/books017.jpg',
    },
    {
      small: '/assets/img/books/books019.jpg',
      medium: '/assets/img/books/books019.jpg',
      big: '/assets/img/books/books019.jpg',
    },
    {
      small: '/assets/img/books/books020.jpg',
      medium: '/assets/img/books/books020.jpg',
      big: '/assets/img/books/books020.jpg',
    },
    {
      small: '/assets/img/books/books21.jpg',
      medium: '/assets/img/books/books21.jpg',
      big: '/assets/img/books/books21.jpg',
    },
    {
      small: '/assets/img/books/books022.jpg',
      medium: '/assets/img/books/books022.jpg',
      big: '/assets/img/books/books022.jpg',
    },
    {
      small: '/assets/img/books/books023.jpg',
      medium: '/assets/img/books/books023.jpg',
      big: '/assets/img/books/books023.jpg',
    },
    {
      small: '/assets/img/books/books024.jpg',
      medium: '/assets/img/books/books024.jpg',
      big: '/assets/img/books/books024.jpg',
    },
    {
      small: '/assets/img/books/books025.jpg',
      medium: '/assets/img/books/books025.jpg',
      big: '/assets/img/books/books025.jpg',
    },
    {
      small: '/assets/img/books/books026.jpg',
      medium: '/assets/img/books/books026.jpg',
      big: '/assets/img/books/books026.jpg',
    },
    {
      small: '/assets/img/books/books027.jpg',
      medium: '/assets/img/books/books027.jpg',
      big: '/assets/img/books/books027.jpg',
    },
    {
      small: '/assets/img/books/books028.jpg',
      medium: '/assets/img/books/books028.jpg',
      big: '/assets/img/books/books028.jpg',
    },
    {
      small: '/assets/img/books/books029.jpg',
      medium: '/assets/img/books/books029.jpg',
      big: '/assets/img/books/books029.jpg',
    },
    {
      small: '/assets/img/books/books030.jpg',
      medium: '/assets/img/books/books030.jpg',
      big: '/assets/img/books/books030.jpg',
    },
    {
      small: '/assets/img/books/books031.jpg',
      medium: '/assets/img/books/books031.jpg',
      big: '/assets/img/books/books031.jpg',
    },
    {
      small: '/assets/img/books/books32.jpg',
      medium: '/assets/img/books/books32.jpg',
      big: '/assets/img/books/books32.jpg',
    },
    {
      small: '/assets/img/books/books033.jpg',
      medium: '/assets/img/books/books033.jpg',
      big: '/assets/img/books/books033.jpg',
    },
    {
      small: '/assets/img/books/books034.jpg',
      medium: '/assets/img/books/books034.jpg',
      big: '/assets/img/books/books034.jpg',
    },
    {
      small: '/assets/img/books/books035.jpg',
      medium: '/assets/img/books/books035.jpg',
      big: '/assets/img/books/books035.jpg',
    },
    {
      small: '/assets/img/books/books36.jpg',
      medium: '/assets/img/books/books36.jpg',
      big: '/assets/img/books/books36.jpg',
    },
    {
      small: '/assets/img/books/books037.jpg',
      medium: '/assets/img/books/books037.jpg',
      big: '/assets/img/books/books037.jpg',
    },
    {
      small: '/assets/img/books/books38.jpg',
      medium: '/assets/img/books/books38.jpg',
      big: '/assets/img/books/books38.jpg',
    },
    {
      small: '/assets/img/books/books39.jpg',
      medium: '/assets/img/books/books39.jpg',
      big: '/assets/img/books/books39.jpg',
    },
  ];

  schoolImg = [
    {
      small: '/assets/img/school/school001.JPG',
      medium: '/assets/img/school/school001.JPG',
      big: '/assets/img/school/school001.JPG',
    },
    {
      small: '/assets/img/school/school003.jpg',
      medium: '/assets/img/school/school003.jpg',
      big: '/assets/img/school/school003.jpg',
    },
    {
      small: '/assets/img/school/school004.jpg',
      medium: '/assets/img/school/school004.jpg',
      big: '/assets/img/school/school004.jpg',
    },
    {
      small: '/assets/img/school/school005.jpg',
      medium: '/assets/img/school/school005.jpg',
      big: '/assets/img/school/school005.jpg',
    },
    {
      small: '/assets/img/school/school006.jpg',
      medium: '/assets/img/school/school006.jpg',
      big: '/assets/img/school/school006.jpg',
    },
    {
      small: '/assets/img/school/school007.jpg',
      medium: '/assets/img/school/school007.jpg',
      big: '/assets/img/school/school007.jpg',
    },
    {
      small: '/assets/img/school/school008.jpg',
      medium: '/assets/img/school/school008.jpg',
      big: '/assets/img/school/school008.jpg',
    },
    {
      small: '/assets/img/school/schoolLib001.jpg',
      medium: '/assets/img/school/schoolLib001.jpg',
      big: '/assets/img/school/schoolLib001.jpg',
    },
  ];

  savalmban = [
    {
      small: '/assets/img/savalban/swavlamban halduchaur.JPG',
      medium: '/assets/img/savalban/swavlamban halduchaur.JPG',
      big: '/assets/img/savalban/swavlamban halduchaur.JPG',
    },
    {
      small: '/assets/img/savalban/09_08_2016-agarbatti.jpg',
      medium: '/assets/img/savalban/09_08_2016-agarbatti.jpg',
      big: '/assets/img/savalban/09_08_2016-agarbatti.jpg',
    },
    {
      small: '/assets/img/savalban/sawlambhan.jpg',
      medium: '/assets/img/savalban/sawlambhan.jpg',
      big: '/assets/img/savalban/sawlambhan.jpg',
    },
    {
      small: '/assets/img/savalban/sabun.png',
      medium: '/assets/img/savalban/sabun.png',
      big: '/assets/img/savalban/sabun.png',
    },
    {
      small: '/assets/img/savalban/mushroom3.jpg',
      medium: '/assets/img/savalban/mushroom3.jpg',
      big: '/assets/img/savalban/mushroom3.jpg',
    },
    {
      small: '/assets/img/savalban/kulhu.jpg',
      medium: '/assets/img/savalban/kulhu.jpg',
      big: '/assets/img/savalban/kulhu.jpg',
    },
    {
      small: '/assets/img/savalban/cowProduct.jpg',
      medium: '/assets/img/savalban/cowProduct.jpg',
      big: '/assets/img/savalban/cowProduct.jpg',
    },
    {
      small: '/assets/img/savalban/Agarbatti-Making-Business.jpg',
      medium: '/assets/img/savalban/Agarbatti-Making-Business.jpg',
      big: '/assets/img/savalban/Agarbatti-Making-Business.jpg',
    },
  ];

  doFilterGalleryImg() {
    if (this.componentName == 'BookExhibition') {
      this.galleryImages = this.bookExhibitionImgs;
    } else if (this.componentName == 'Gaushala') {
      this.galleryImages = this.goushalaImgs;
    } else if (this.componentName == 'all') {
      this.galleryImages = this.all;
    } else if (this.componentName == 'school') {
      this.galleryImages = this.schoolImg;
    } else if (this.componentName == 'sawlaban') {
      this.galleryImages = this.savalmban;
    }
  }
}
