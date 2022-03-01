import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  title: string = "Hello, i am Hana ";
  paragraph: string = "I am a Front End / Fullstack Developer";

  ngOnInit() {}

}
