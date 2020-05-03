import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public navBars: String[] = ["Home", "About Us", "Service", "Image Gallery", "Contact US"]; //from service
  navBrand: String = "Gayatri Pariwar Halduchour";// from service
  carouselImgUrl: String[] = ["/assets/img/image1.jpg", "/assets/img/image2.jpg", "/assets/img/image3.jpg", "/assets/img/gpThree.jpeg", '/assets/img/gpTwo.jpeg']

  constructor() { }

  ngOnInit(): void {
  }

}
