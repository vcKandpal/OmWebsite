import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
})
export class CounterDisplayComponent implements OnInit {
  EventCounter: any = [
    { name: 'Yagya', total: 0 },
    { name: 'Sanskara', total: 0 },
    { name: 'Workshop', total: 0 },
    { name: 'Books Exhibition', total: 0 },
  ];

  constructor() {}
  myvalue = 90;
  ngOnInit(): void {
    this.doSomethingOnComplete();
  }

  doSomethingOnComplete() {
    console.log('do something for for complete');
  }
  scrollCounter = 0;
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if (this.scrollCounter > 0 && this.EventCounter[0].total == 0) {
      console.log('Scroll Event ...........  ', event);
      this.myvalue = 763;
      this.EventCounter = [
        { name: 'Yagya', total: 63533 },
        { name: 'Sanskara', total: 764673 },
        { name: 'Workshop', total: 6537 },
        { name: 'Books Exhibition', total: 456 },
      ];
      //  this.doSomethingOnComplete();
    }
    this.scrollCounter++;
  }
}
