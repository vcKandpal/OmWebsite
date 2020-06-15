import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css'],
})
export class AboutUsPageComponent implements OnInit {
  detaildObject = {
    imgUrl: '/assets/img/documentfromvk/gurumata.jpg',
    minHeigth: 500,
    overlayMinHeight: 500,
    pageTitle: 'About Us',
    discription:
      'Don’t pay attention to what people say. Instead, see whether the goal that was worth attaining has been achieved or not.',
  };
  constructor() {}

  ngOnInit(): void {}
}
