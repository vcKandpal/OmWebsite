import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todays-thought',
  templateUrl: './todays-thought.component.html',
  styleUrls: ['./todays-thought.component.css']
})
export class TodaysThoughtComponent implements OnInit {
  @Input() index: number;
  todayThought: String[] = ["THE ESSENCE OF LIFE IS TIME. IF YOU LOVE LIFE DONT WASTE TIME BY BEING LAZY.", "JEALOUSY EATS AWAY AT A PERSON IN THE SAME WAY AS A MOTH EATS AWAY AT A PIECE OF CLOTH.", "DO NOT PRAISE THOSE WHO HAVE EARNED THEIR WEALTH AND SUCCESS BY UNFAIR MEANS.", "If you're not making mistakes, then you're not doing anything. I'm positive that a doer makes mistakes.", "Nurture your mind with great thoughts, for you will never go any higher than you think."];

  constructor() { }

  ngOnInit(): void {
    console.log("index ", this.index)
  }

}
