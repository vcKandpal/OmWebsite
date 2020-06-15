import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent implements OnInit {
  constructor() {}
  componetName: String = 'all';
  buttons: any = [
    { title: 'All', filterVar: 'all' },
    { title: 'Sahitya', filterVar: 'BookExhibition' },
    { title: 'Goushala', filterVar: 'Gaushala' },
    { title: 'School', filterVar: 'school' },
    { title: 'Sawlamban', filterVar: 'sawlaban' },
  ];

  ngOnInit(): void {}

  getImgData(input) {
    console.log(input);
    this.componetName = input;
  }
}
