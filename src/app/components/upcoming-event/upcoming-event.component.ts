import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css'],
})
export class UpcomingEventComponent implements OnInit {
  eventIndex: number = 0;
  constructor() {}
  events: any = [
    {
      name: 'Gaytri Janti',
      date: '21-Jun-2020',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Guru Purninma',
      date: '12-Jul-2020',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Ram Noumi',
      date: '04-Oct-2020',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Ganesh Chaturdashi',
      date: '09-Aug-2020',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Diwali',
      date: '29-Oct-2020',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Rashabandhan',
      date: '30-Aug-2020',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Makrsankranti',
      date: '14-Jan-2020',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Tritiya Navratri',
      date: '11-Mar-2020',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
  ];

  showEvents: any[] = [];

  ngOnInit(): void {
    this.showEvents = this.events.slice(0, 4);
  }

  onGoToPrevPage() {
    console.log('hellow fear... shownext......');
    if (this.eventIndex !== 0) {
      this.eventIndex = this.eventIndex - 1;
      let firstIndex = this.eventIndex * 4;
      let lastIndex = (this.eventIndex + 1) * 4;
      this.showEvents = this.events.slice(firstIndex, lastIndex);
    }
  }

  onGoToNextPage() {
    if ((this.eventIndex + 1) * 4 < this.events.length) {
      this.eventIndex = this.eventIndex + 1;
      let firstIndex = this.eventIndex * 4;
      let lastIndex = (this.eventIndex + 1) * 4;
      this.showEvents = this.events.slice(firstIndex, lastIndex);
    }
  }
}
