import { Component, OnInit,Input } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';
import { updateUserProgress, updateUserResults } from 'src/utils/requests';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() chapterTitle: string;
  @Input() chapterNr: number;
  @Input() setIsQuizzOpen: (value:boolean) => void
  @Input() userEmail: string;

  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  constructor(private questionService: QuestionService,private router:Router) { }

  ngOnInit(): void {
    console.log({titleChap: this.chapterNr})
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = this.chapterNr ? res.questions[this.chapterNr-1] : [];
      })
  }
  nextQuestion() {
    if( this.currentQuestion >= this.questionList.length - 1) {
      // aici se ajunge la ultima intrebare
      return;}
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  redirectHome(){
    location.reload();
  }
  answer(currentQno: number, option: any) {

    if(this.currentQuestion + 1 === this.questionList.length){
      let newChapterNr = this.chapterNr;
      const score = `${this.correctAnswer}/${this.questionList.length}`;
      updateUserProgress(this.userEmail,newChapterNr.toString())
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
        console.log({score})
      updateUserResults(this.userEmail,newChapterNr.toString(),score)
      .then(resp => console.log(resp))
      .catch(err => console.log(err));

      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
     
    }else{
      this.inCorrectAnswer++;
    }
  }
  startCounter() {
    // this.interval$ = interval(1000)
    //   .subscribe(val => {
    //     this.counter--;
    //     if (this.counter === 0) {
    //       this.currentQuestion++;
    //       this.counter = 60;
    //       this.points -= 10;
    //     }
    //   });
    // setTimeout(() => {
    //   this.interval$.unsubscribe();
    // }, 600000);
  }
  stopCounter() {
    // this.interval$.unsubscribe();
    // this.counter = 0;
  }
  resetCounter() {
   
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";

  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }
}
