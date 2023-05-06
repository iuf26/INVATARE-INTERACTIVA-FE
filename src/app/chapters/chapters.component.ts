import { Component, OnInit,Input } from '@angular/core';
import { ChapterArray, allChapters } from '../chapterArray';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss'],
})
export class ChaptersComponent implements OnInit {
  chapters: ChapterArray;
  @Input() setIsQuizzOpen: (value:boolean) => void
  @Input() setQuizzChapter :(value:string) => void
  @Input() setQuizzId: (value:number) => void
  @Input() userProgress: number;

  constructor() {
    this.chapters = allChapters;
  }

  ngOnInit(): void {}
}
