import { Component, OnInit, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit {
  @Input() chapterNr: number;
  @Input() chapterDescription: string;
  @Input() setIsQuizzOpen: (value: boolean) => void;
  @Input() setQuizzChapter :(value:string) => void
  @Input() setQuizzId: (value:number) => void
  @Input() videoLinks: Array<string>;
  @Input() glossary:Array<{ word: string; meaning: string }>;
  @Input() userProgress: number;
  score: string;
  @Input() userResults$:Array<string>
  @Input() $results:Subject<Array<string>>;
  resultsSubs: Subscription;
  constructor() {}

  ngOnInit(): void {
    this.resultsSubs = this.$results.subscribe((res:Array<string>) => {
      console.log('in subs...')
        this.userResults$ = res;
    })
   

  }

  getScore(){
    if (this.userResults$ && (this.chapterNr - 1 < this.userResults$.length)){
      return `Score: ${this.userResults$[this.chapterNr - 1]}`;
    }
    return "";
  }

  onStartTestButtonClick(chapterNr: number) {
  
    this.setQuizzChapter(this.chapterDescription)
    this.setQuizzId(this.chapterNr);
    this.setIsQuizzOpen(true);
  }

  isChapterDisabled(){
    return this.chapterNr > this.userProgress + 1
  }

  ngOnDestroy() {
    if (this.resultsSubs) {
      this.resultsSubs.unsubscribe();
    }
  }

}
