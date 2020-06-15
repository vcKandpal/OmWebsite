import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-exhibition',
  templateUrl: './books-exhibition.component.html',
  styleUrls: ['./books-exhibition.component.css'],
})
export class BooksExhibitionComponent implements OnInit {
  componetName: string = 'BookExhibition';
  ourBooks = [
    { name: '', img: '/assets/img/books/jivan_sadhana.jpg' },
    {
      name: '',
      img:
        '/assets/img/books/Title_EP_156_Title_Odyssey_of_the_Enlightned_Part-2__F_.jpg',
    },
    { name: '', img: '/assets/img/books/rs.jpg' },
    { name: '', img: '/assets/img/books/refinement.jpg' },
    {
      name: '',
      img:
        '/assets/img/books/PROBLEMS-OF-TODAY-SOLUTIONS-FOR-TOMORROW-_EP-14_.jpg',
    },
    { name: '', img: '/assets/img/books/married.jpg' },
    {
      name: '',
      img: '/assets/img/books/EXTRA-SENSORY-POTENTIALS-OF-THE-MIND-_EP-34_.jpg',
    },
    {
      name: '',
      img: '/assets/img/books/Eternity_of_Sound_and_Science_of_Mantras_1.jpg',
    },
    { name: '', img: '/assets/img/books/Human-Brain-_EP-10_.jpg' },
    { name: '', img: '/assets/img/books/youth.jpg' },
    { name: '', img: '/assets/img/books/wonbders.jpg' },
    { name: '', img: '/assets/img/books/VN85.jpg' },
    { name: '', img: '/assets/img/books/THE-FOLLY-OF-THE-WISE-_EP-13_.jpg' },
    { name: '', img: '/assets/img/books/support-is-needed.jpg' },
    { name: '', img: '/assets/img/books/Super_Science_of_Gayatri_1.jpg' },
    {
      name: '',
      img: '/assets/img/books/Sleep_Dreams_And_Spiritual_Replections_1.jpg',
    },
    { name: '', img: '/assets/img/books/sa43_front.jpg' },
    {
      name: '',
      img: '/assets/img/books/Rishi_Chintan_Ke_Sanidhya_Mein_Part_2_1.jpg',
    },
    {
      name: '',
      img:
        '/assets/img/books/Kay-urja-aaevam-uski-Chamatakari-Samartharya-1_2.jpg',
    },
    { name: '', img: '/assets/img/books/jivan_jine_sutra_hindi.jpg' },
    { name: '', img: '/assets/img/books/img270.jpg' },
    { name: '', img: '/assets/img/books/ikkisvi-sadi-naari-sadi_1.jpg' },
    { name: '', img: '/assets/img/books/Guru_Geeta__Big__1.jpg' },
    { name: '', img: '/assets/img/books/ep17_frony.jpg' },
    { name: '', img: '/assets/img/books/AV69.jpg' },
    { name: '', img: '/assets/img/books/Aurved-ka-Darshan.jpg' },
    { name: '', img: '/assets/img/books/Asan-Pranayam-Bandh-Mudra.jpg' },
    { name: '', img: '/assets/img/books/Aalasya-Chodiye-1_1.jpg' },
  ];
  constructor() {}
  booksTitle = [
    {
      topic: 'SPIRITUALITY',
      subTopic: [
        'SELF REALIZATION',
        'PERSONAL TRANSFORMATION',
        'LIFE AFTER DEATH',
        'LAW OF KARMA',
        'UPASANA SADHANA',
        'ATHEISM',
        'MEDITATIONS',
        'DEVOTIONALS',
        'SPIRITUAL STORIES',
        'KNOW ABOUT SOUL',
        'INNER AWAKENING',
      ],
    },
    {
      topic: 'INDIAN CULTURE',
      subTopic: [
        'SCRIPTURES',
        'YAGYA',
        'GAYATRI',
        'SANSKAR',
        'KATHA AND PURANS',
        'MENTORS & GURUS',
        'INDIAN CULTURE PHYLOSOPHY',
        'PRAYERS & ACCESSORIES',
        'FESTIVALS',
      ],
    },
    {
      topic: 'YOGA & PRANAYAM',
      subTopic: ['YOGA PRANAYAAM', 'YOGA PHILOSOPHY', 'MEDITATIONS'],
    },
    {
      topic: 'LIFE MANAGEMENT',
      subTopic: ['ART OF LIVING', 'PEACE & HAPPINESS', 'HUMAN DIGNITY'],
    },
    {
      topic: 'PARENTING & RELATIONS',
      subTopic: ['PARENTING', 'AGEING PARENTS', 'MARRIAGE & RELATIONS'],
    },
    {
      topic: 'SCIENCE & SPIRITUALITY',
      subTopic: [
        'SCIENTIFIC SPIRITUALITY',
        'SCIENCE & RELIGION',
        'INNER POTENTIALS',
        'DREAMS',
        'PARANORMAL ATTAINMENTS',
        'INTELLECTUAL DEVELOPMENT',
        'MYSTERIOUS UNIVERSE',
      ],
    },
    {
      topic: 'HEALTH & FITNESS',
      subTopic: [
        'ALTERNATIVE MEDICINE',
        'YOGA & FITNESS',
        'PSYCHOLOGY & COUNSELLING',
        'FOOD HABIT',
        'HOLISTIC HEALTH',
      ],
    },
    {
      topic: 'SELF-HELP',
      subTopic: [
        'WILL POWER/MIND POWER',
        'HAPPINESS',
        'SUCCESS',
        'PERSONALITY REFINEMENT',
        'STRESS MANAGEMENT',
        'EMOTIONS',
        'MOTIVATIONAL',
      ],
    },
    { topic: 'CHILDRENS', subTopic: ['PARENTING', 'MORAL STORIES'] },
    {
      topic: 'TEEN & STUDENTS',
      subTopic: ['PHYSICAL & EMOTIONAL STRENGTH', 'STUDENT LIFE'],
    },
    {
      topic: 'SOCIAL IMPROVEMENT',
      subTopic: [
        'VILLAGE DEVELOPMENT & ENVIRONMENT',
        'WOMEN EMPOWERMENT',
        'EDUCATION & SELF RELIANCE',
        'DE-ADDICTIONS & EVIL CUSTOMS',
      ],
    },
    {
      topic: 'CONSTRUCTING ERA',
      subTopic: [
        'THOUGHT REVOLUTION',
        'TRANSFORMING ERA',
        'GREAT PERSONALITIES',
        'ADVENT OF NEW ERA',
      ],
    },
    { topic: 'BHAJAN SANGEET', subTopic: ['ALL BHAJANS', 'KAVITA'] },
    {
      topic: 'GAYATRI PARIWAR RELATED',
      subTopic: [
        'PT. SHRIRAM SHARMA ACHARYA (YUG RISHI)',
        ' SHANTIKUNJ & ESTABLISHMENTS',
        'OBJECTIVE AND EXPANSION',
        'QUOTATIONS',
      ],
    },
  ];

  ourMagazines = [
    {
      name: 'Akhand Jyoti(Hindi)',
      img: '/assets/img/books/akhandJyoti_Hindi.jpg',
      subscription: 220,
    },
    // {
    //   name: 'Akhand Jyoti(English)',
    //   img: '/assets/img/books/akhandJyoti_English.jpg',
    //   subscription: 140,
    // },
    {
      name: 'Yug Nirman Yojana(Hindi)',
      img: '/assets/img/books/yugnirman.jpg',
      subscription: 110,
    },
    {
      name: 'Pragya Abhiyaan(Hindi)',
      img: '/assets/img/books/prgyaAbhiyan.jpg',
      subscription: 220,
    },
  ];

  ngOnInit(): void {
    console.log('books :', this.ourBooks);
  }
}
