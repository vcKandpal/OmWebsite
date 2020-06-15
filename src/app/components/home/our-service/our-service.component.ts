import { Component, OnInit } from '@angular/core';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css'],
})
export class OurServiceComponent implements OnInit {
  // faTwitter = faTwitter;
  title: string = 'Our Services';
  serviceContents =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum numquam aperiam dolores a porro!';
  services: any[] = [
    {
      title: 'Books Exhibition',
      img: '/assets/img/sahityaInstall.jpg',
      discription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      link: '/service/booksExhibition',
    },
    {
      title: 'Sawlambhan',
      img: '/assets/img/sawlambhan.jpg',
      discription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      link: '/service/shavlabhan',
    },
    {
      title: 'Goshala',
      img: '/assets/img/goshala.jpg',
      discription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      link: '/service/gaushala',
    },
    {
      title: 'School',
      img: '/assets/img/school002.jpg',
      discription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      link: '/service/school',
    },
    {
      title: 'Sanskar',
      img: '/assets/img/sanskarGH.jpg',
      discription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      link: '/service/sanskar',
    },
  ];
  socialMedia: any = {
    facebook:
      'https://www.facebook.com/gayatri.shaktipeeth.9?__tn__=%2CdC-R-R&eid=ARBLxJucUjqpH8LhjqIv8bJGOcSlZudGPVQSkyPCy8-o7b5NvsK63ZTnzL4b5X-HmM0b-5_OtF3vKN6o&hc_ref=ARQNFqFZuU3PR3RfVwkOhflx8QEKtFO1IVu6ucgQLxTLFWehqEIkYAkDnLIdt_DWM80&fref=nf',
    youtube: 'https://twitter.com/awgpharidwar?lang=en',
    twitter: 'https://twitter.com/awgpharidwar?lang=en',
    instagram: 'https://www.instagram.com/shantikunjharidwar/?hl=en',
  };
  constructor() {}

  ngOnInit(): void {}
}
