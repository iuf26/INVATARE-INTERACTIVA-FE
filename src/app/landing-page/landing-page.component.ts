import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public isQuizzOpen: boolean;
  public quizzChapter:string;
  public quizzId:number;

  constructor() {}

  ngOnInit(): void {}

  setIsQuizzOpen(value: boolean) {
    this.isQuizzOpen = value;
  }

  setQuizzChapter(value:string){
    console.log({quizChap:value});
    this.quizzChapter = value;
  }

  setQuizzId(value:number){
    this.quizzId = value;
  }


}
