import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
})
export class SchoolComponent implements OnInit {
  title: 'school';
  detaildObject = {
    imgUrl: '/assets/img/school/school001.JPG',
    minHeigth: 400,
    overlayMinHeight: 450,
    pageTitle: 'School',
    discription:
      '“You don’t learn to walk by following rules. You learn by doing, and by falling over.”',
  };
  constructor() {}

  ngOnInit(): void {}
}
