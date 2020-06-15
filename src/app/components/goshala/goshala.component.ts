import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goshala',
  templateUrl: './goshala.component.html',
  styleUrls: ['./goshala.component.css'],
})
export class GoshalaComponent implements OnInit {
  title: string = 'Gaushala';
  detaildObject = {
    imgUrl: '/assets/img/goshala.jpg',
    minHeigth: 500,
    overlayMinHeight: 550,
    pageTitle: 'Gaushala',
    discription:
      'Cow is the source of progress and prosperity. In many ways it is superior to one’s mother',
  };
  constructor() {}

  ngOnInit(): void {}
}
