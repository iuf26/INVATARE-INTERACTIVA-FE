import { Component, OnInit } from '@angular/core';
import { ChapterArray, allChapters } from '../chapterArray';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss'],
})
export class ChaptersComponent implements OnInit {
  chapters: ChapterArray;

  constructor() {
    this.chapters = allChapters;
  }

  ngOnInit(): void {}
}
