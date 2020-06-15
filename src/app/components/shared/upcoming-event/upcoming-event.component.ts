import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { StringLengthManagerPipe } from '../../../pipes/string-length-manager.pipe';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css'],
})
export class UpcomingEventComponent implements OnInit {
  eventIndex: number = 0;
  length: number = 150;
  readFlag: boolean = true;
  @Input() componetType: string;
  readIndex: any = 0;
  title: string;
  constructor() {}
  upcomingEvents: {
    name: string;
    date: Date;
    imgUrl: string;
    discription: string;
  }[] = [
    {
      name: 'Gaytri Janti',
      date: new Date('1-June-2020'),
      imgUrl: '/assets/img/sun.jpg',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Guru Purninma',
      date: new Date('12-Jul-2020'),
      imgUrl: '/assets/img/prakhar.jpg',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Ram Noumi',
      date: new Date('04-Oct-2020'),
      imgUrl: '/assets/img/mashal.jpg',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Ganesh Chaturdashi',
      date: new Date('09-Aug-2020'),
      imgUrl: '/assets/img/IMG_20171225_132426.jpg',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Diwali',
      date: new Date('29-Oct-2020'),
      imgUrl: '/assets/img/IMG_20171225_132426.jpg',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Rashabandhan',
      date: new Date('30-Aug-2020'),
      imgUrl: '/assets/img/IMG_20171225_144410.jpg',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Makrsankranti',
      date: new Date('14-Jan-2020'),
      imgUrl: '/assets/img/IMG_20171225_135025.jpg',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
    {
      name: 'Tritiya Navratri',
      date: new Date('11-Mar-2020'),
      imgUrl: '/assets/img/IMG_20171225_133129.jpg',
      discription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.',
    },
  ];

  sanskar = [
    {
      name: 'GARBHADHAN',
      imgUrl: '/assets/img/sanskar/garbh-sanskar002.jpg',
      discription:
        'All sources recognize this as the first Sanskar. This is the enthusiastic prayer for a child. This is done for fulfillment of parental duty to continue the race. To produce a good child, its mother and father should have pure thoughts and observe the rules of Shastras. God characterizing parents are necessary for bringing up a good child in the world.',
    },
    {
      name: 'PUNSAVANA',
      imgUrl: '/assets/img/sanskar/Grabhaadhan.jpg',
      discription:
        'This second sanskar Ceremony is  performed  during the third or the fourth month of pregnancy ,when the first signs of conception are seen, and is to be performed when someone desires a male child. The reason for expecting male child is believed to be in the belief that it is the male child who carries the Vansha forward',
    },
    {
      name: 'SIMANTONAYANA',
      imgUrl: '/assets/img/sanskar/simantonayan.jpg',
      discription:
        'This Sanskar is performed during the seventh month of pregnancy and prayers are offered for the healthy physical and mental growth of the child. The other importance of this Sanskar is to free the expectant mother free from worries since the last 3 months are very difficult for pregnant woman- both physically and mentally. ',
    },
    {
      name: 'JATAKARMA',
      imgUrl: '/assets/img/sanskar/Jatakarma.jpg',
      discription:
        'Jaat-karma performed on six days from the birth of a child, is for the purification of the house. This is done in order to keep a child in a clean atmosphere where he may not incur any physical or mental problems. It is also called Shashthi.',
    },
    {
      name: 'NAMKARAN',
      imgUrl: '/assets/img/sanskar/namkaran002.jpg',
      discription:
        'This Sanskar is performed on the tenth , eleventh or twelth day with recitation of Mantras. The baby child gets name on completion of this Sanskar, according to the  27 Nakshatra and the position of the moon at the time of child’s birth. An appropriate name is given to the child according to the planetary position  of birth time and the first letter of the name is taken from the Hora Shatra.',
    },
    {
      name: 'NISHKRAMANA',
      imgUrl: '/assets/img/sanskar/nishkramana.jpg',
      discription:
        'This ceremony is performed on or after 40 days, but some scriptures allow it at the time of naming ceremony when the child is taken out of the home for the first time. The reason for this Sanskar is to show obedience to the sun, moon, fire, wind etc, -the Panchmahabhut (Five elements) .This is supposed to enhance the age and physical and mental development of the child.',
    },
    {
      name: 'ANNAPRASHANA',
      imgUrl: '/assets/img/sanskar/annaorashan.jpg',
      discription:
        'This sanskar is performed on sixth month, when the child is given solid food (anna) for the first time. Mantras recited and oblations are offered to the various deities. Sweet porridge or rice pudding can be given to the child, if parents are desirous of nourishment, holy luster, swiftness, or splendor. ',
    },
    {
      name: 'CHUDAKARANA OR MUNDAN',
      imgUrl: '/assets/img/sanskar/mundan.jpg',
      discription:
        'This Sanskar is the first time cutting of hair on the child’s head . The ceremony is to be performed on an auspicious day after the age of one year. This ceremony is performed for the development of power better understanding, and for long life. ',
    },
    {
      name: 'KARNVEDH',
      imgUrl: '/assets/img/sanskar/karnvedh.jpg',
      discription:
        'This sanskar is performed in the third or fifth year, Piercing of the ears. With the commencement of Surya Puja; the father should first address the right ear of the child with the mantra “Oh God may we hear bliss with our ears”, performed so that child may listen to good things and to have a good education.',
    },
    {
      name: 'UPANAYANA OR YAGYOPAVEET',
      imgUrl: '/assets/img/sanskar/yagyopaveet.jpg',
      discription:
        'Upanayana is the ceremony of wearing the sacred thread called Yajnopaveetam. When male child attains 5 years, the wearing of the sacred thread Yajnopaveetam, is ceremoniously done. This Sanskar is second birth for child – A spiritual birth. The child is thereafter authorized to perform all rituals. Studies of Vedas begins with the Guru.',
    },
    {
      name: 'VEDARAMBH',
      imgUrl: '/assets/img/sanskar/vidhiyarambh.jpg',
      discription:
        'This Sanskar is done along with Upanayana. Vedarambha is the learning of Vedas and Upanishads in ‘Gurukula’ or ‘Pathashala’. In the beginning of each academic period there is a ceremony called Upakarm and at the end of each academic period there is another ceremony called Upasarjana.',
    },
    {
      name: 'SAMAVARTANA',
      imgUrl: '/assets/img/sanskar/samavartana.jpg',
      discription:
        'Samavartan  is the ceremony associated with the end of formal education of Vedas in ‘Gurukul’. After learning the rules of life he returns home from his Teacher’s Ashram. When he completes his education about and religion the law of life, his first Ashram Brahmacharya is complete. He is now eligible to enter into the householder stage, and considered a qualified man to get married.',
    },
    {
      name: 'VIVAHA',
      imgUrl: '/assets/img/sanskar/vivah.jpg',
      discription:
        'This sanskar is entry into the second Ashram. The life as individual family begins. Vedic Hindu marriage is viewed as sacramental, which is a lifelong commitment of one wife and one husband. It is the strongest bond between a man and a woman, which takes place in the presence of their parents, relatives, and friends.',
    },
    {
      name: 'VANPRASTHA',
      imgUrl: '/assets/img/sanskar/vanprasht.webp',
      discription:
        'This ceremony is performed at the age of 50, in some cases at the age of 60. With the commencement of his ceremony, a man completes his Grahastha Dharma and enters into Vanprastha Ashram (forest hermit). Man  withdraws himself from all worldly activities, retires into the forest and prepares himself for taking sanyas. This is the life of a Vanprastha.',
    },
    {
      name: 'SANYASA',
      imgUrl: '/assets/img/sanskar/sanyash.jpg',
      discription:
        'Before leaving the body a Hindu sheds all sense of responsibility & relationships to awake & revel in the timeless truth. A  sanyasi renounces the world and leads a life of study and meditation by living on alms.',
    },
    {
      name: 'ANTYESHTI',
      imgUrl: '/assets/img/sanskar/antesty.jpg',
      discription:
        'Antyeshti (literally, last rites), sometimes referred to as Antim-Sanskar, are the rituals associated with funeral. When death is imminent, a small piece of gold, tulsi leaf and drops of Ganga water are put in the mouth of the person on the death bed. The body is laid on the ground with the head towards the north.',
    },
  ];

  showEvents: any[] = [];
  events: any[] = [];

  ngOnInit(): void {
    console.log('test :  ');
    let test: any = this.upcomingEvents;
    this.sortEventByDate(test);
    if (this.componetType == 'Home') {
      this.events = this.upcomingEvents;
      this.title = 'Upcoming Events';
    } else {
      this.events = this.sanskar;
      this.title = 'Type Of Sanskar';
    }
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

  readMore(index) {
    this.readFlag = !this.readFlag;
    this.length = this.readFlag ? 150 : 100000;
    this.readIndex = index;
  }

  sortEventByDate(upcomingEvents: any) {
    let result = upcomingEvents.sort((event1: any, event2: any) => {
      console.log('event 1', event1);
      console.log('event 2', event2);
      return Number(new Date(event1.date)) - Number(new Date(event2.date));
    });

    console.log(' sort Result : ', result);
  }
}
