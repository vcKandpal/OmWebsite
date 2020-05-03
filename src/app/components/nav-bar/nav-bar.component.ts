import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public navBars: String[] = ["Home", "About Us", "Service", "Image Gallery", "Contact US"]; //from service
  navBrand: String = "Gayatri Pariwar Halduchour";// from service


  constructor() { }

  ngOnInit(): void {
  }

}
