import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swavlamban',
  templateUrl: './swavlamban.component.html',
  styleUrls: ['./swavlamban.component.css'],
})
export class SwavlambanComponent implements OnInit {
  componetName: string = 'sawlaban';
  detaildObject = {
    imgUrl: '/assets/img/sawlambhan001.jpg',
    minHeigth: 350,
    overlayMinHeight: 400,
    pageTitle: 'Swalabhan',
    discription:
      'Cow is the source of progress and prosperity. In many ways it is superior to one’s mother',
  };
  constructor() {}

  savabhanServices: {
    title: string;
    img: string;
    discription: string;
    author: string;
  }[] = [
    {
      title: 'Janeun Production',
      img: 'assets/img/swavlamban halduchaur.JPG',
      discription:
        'वर्तमान समय में स्वास्थ्य समस्या व रोगों की जटिल स्थिति को देखते हुए, इसके निराकरण की आवश्यकता को ध्यान में रखकर शांतिकुंज, हरिद्वार में 4 दिवसीय स्वास्थ्य एवं स्वावलम्बन प्रशिक्षण शिविर का आयोजन किया गया है। ',
      author: 'pandit Sriram Sharma Acharya',
    },
    {
      title: 'Cow Product',
      img: 'assets/img/savalban/cowProduct.jpg',
      discription:
        'वर्तमान समय में स्वास्थ्य समस्या व रोगों की जटिल स्थिति को देखते हुए, इसके निराकरण की आवश्यकता को ध्यान में रखकर शांतिकुंज, हरिद्वार में 4 दिवसीय स्वास्थ्य एवं स्वावलम्बन प्रशिक्षण शिविर का आयोजन किया गया है। ',
      author: 'pandit Sriram Sharma Acharya',
    },
    {
      title: 'Agarbatti Production',
      img: 'assets/img/savalban/09_08_2016-agarbatti.jpg',
      discription:
        'वर्तमान समय में स्वास्थ्य समस्या व रोगों की जटिल स्थिति को देखते हुए, इसके निराकरण की आवश्यकता को ध्यान में रखकर शांतिकुंज, हरिद्वार में 4 दिवसीय स्वास्थ्य एवं स्वावलम्बन प्रशिक्षण शिविर का आयोजन किया गया है। ',
      author: 'pandit Sriram Sharma Acharya',
    },
    {
      title: 'Oil Extraction(Kolhu) ',
      img: 'assets/img/savalban/kulhu.jpg',
      discription:
        'वर्तमान समय में स्वास्थ्य समस्या व रोगों की जटिल स्थिति को देखते हुए, इसके निराकरण की आवश्यकता को ध्यान में रखकर शांतिकुंज, हरिद्वार में 4 दिवसीय स्वास्थ्य एवं स्वावलम्बन प्रशिक्षण शिविर का आयोजन किया गया है। ',
      author: 'pandit Sriram Sharma Acharya',
    },
    {
      title: 'Soup Production',
      img: 'assets/img/savalban/sabun.png',
      discription:
        'वर्तमान समय में स्वास्थ्य समस्या व रोगों की जटिल स्थिति को देखते हुए, इसके निराकरण की आवश्यकता को ध्यान में रखकर शांतिकुंज, हरिद्वार में 4 दिवसीय स्वास्थ्य एवं स्वावलम्बन प्रशिक्षण शिविर का आयोजन किया गया है। ',
      author: 'pandit Sriram Sharma Acharya',
    },
    {
      title: 'Mashroom Production',
      img: 'assets/img/savalban/mushroom3.jpg',
      discription:
        'वर्तमान समय में स्वास्थ्य समस्या व रोगों की जटिल स्थिति को देखते हुए, इसके निराकरण की आवश्यकता को ध्यान में रखकर शांतिकुंज, हरिद्वार में 4 दिवसीय स्वास्थ्य एवं स्वावलम्बन प्रशिक्षण शिविर का आयोजन किया गया है। ',
      author: 'pandit Sriram Sharma Acharya',
    },
  ];

  ngOnInit(): void {}
}
