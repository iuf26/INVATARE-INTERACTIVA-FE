import { Component, OnInit,Input } from '@angular/core';
import { getUserProgress } from 'src/utils/requests';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public isQuizzOpen: boolean;
  public quizzChapter:string;
  public quizzId:number;
  userProgress:number;//chapter on which the user is currently on
  userEmail:string = localStorage.getItem('email') || "undefinedEmail"

  constructor() {}

  ngOnInit(): void {
    getUserProgress(this.userEmail)
    .then(resp => resp.data)
    .then(resp => {
      this.userProgress = resp;
    })
    .catch(error => {console.error(error)})


  }

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
