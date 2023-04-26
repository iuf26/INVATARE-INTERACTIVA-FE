import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public isQuizzOpen: boolean;

  constructor() {}

  ngOnInit(): void {}

  setIsQuizzOpen(value: boolean) {
    this.isQuizzOpen = value;
    console.log("heei");
    console.log({value});
    console.log({newv:this.isQuizzOpen});
  }
}
