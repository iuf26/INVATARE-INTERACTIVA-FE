import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  onStartTestButtonClick(chapterNr: number) {
  
    this.setQuizzChapter(this.chapterDescription)
    this.setQuizzId(this.chapterNr);
    this.setIsQuizzOpen(true);
  }

  isChapterDisabled(){
    return this.chapterNr > this.userProgress + 1
  }
}
