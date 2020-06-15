import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-video-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  public navBars: String[] = [
    'Home',
    'About Us',
    'Service',
    'Image Gallery',
    'Contact US',
  ]; //from service
  navBrand: String = 'Gayatri Pariwar Halduchour'; // from service
  carouselImgUrl: String[] = [
    '/assets/img/event-02.jpg',
    '/assets/img/event-03.jpg',
    // '/assets/img/image1.jpg',
    // '/assets/img/image2.jpg',
    // '/assets/img/image3.jpg',
    '/assets/img/event-04.jpg',
    '/assets/img/event-05.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
