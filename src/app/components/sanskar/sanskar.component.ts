import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanskar',
  templateUrl: './sanskar.component.html',
  styleUrls: ['./sanskar.component.css'],
})
export class SanskarComponent implements OnInit {
  constructor() {}
  componentType = 'Sanskar';
  ngOnInit(): void {
    console.log('test Sanskar...........................');
  }
}
