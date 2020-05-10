import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public navBars: any[] = [
    { title: 'Home', link: '/home' },
    { title: 'About Us', link: '/about' },
    { title: 'Service', link: '/service' },
    { title: 'Image Gallery', link: '/gallery' },
    { title: 'Contact US', link: '/contactUs' },
  ]; //from service
  navBrand: String = 'Gayatri Pariwar Halduchaur'; // from service

  constructor() {}

  ngOnInit(): void {}
}
