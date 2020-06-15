import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public navBars: any[] = [
    { title: 'Home', link: '/home', subMenu: [] },
    { title: 'About Us', link: '/about', subMenu: [] },
    {
      title: 'Services',
      link: '/service',
      subMenu: [
        { title: 'Sanshkar', link: '/service/sanskar' },
        { title: 'Gaushala', link: '/service/gaushala' },
        { title: 'School', link: '/service/school' },
        { title: 'Shavlabhan', link: '/service/shavlabhan' },
        { title: 'Books Exhibition', link: '/service/booksExhibition' },
      ],
    },
    { title: 'Image Gallery', link: '/gallery', subMenu: [] },
    { title: 'Contact US', link: '/contactUs', subMenu: [] },
    { title: 'Donate US', link: '/donateUs', subMenu: [] },
  ]; //from service
  navBrand: String = 'Gayatri Pariwar Halduchaur'; // from service

  constructor() {}

  ngOnInit(): void {}
}
