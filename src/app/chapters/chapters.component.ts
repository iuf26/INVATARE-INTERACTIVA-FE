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

  constructor() {
    this.chapters = allChapters;
  }

  ngOnInit(): void {}
}
