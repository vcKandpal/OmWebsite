import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.css'],
})
export class ImgCarouselComponent implements OnInit {
  private readonly newProperty = '/assets/img/sanskar/vasant001.JPG';
  @Input('detailedObject') detailedObject;
  imgUrl: string = this.newProperty;
  imgMinHeight = 600;
  overlayMinImg = 650;
  pageTitle = 'Test';
  discription = '';
  constructor() {}

  ngOnInit(): void {
    console.log('detailedObject  ', this.detailedObject);
    this.imgUrl = this.detailedObject.imgUrl;
    this.imgMinHeight = this.detailedObject.minHeigth;
    this.overlayMinImg = this.detailedObject.overlayMinHeight;
    this.pageTitle = this.detailedObject.pageTitle;
    this.discription = this.detailedObject.discription;
  }
}
