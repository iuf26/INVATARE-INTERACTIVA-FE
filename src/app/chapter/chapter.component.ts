import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit {
  @Input() chapterNr: number;
  @Input() chapterDescription: string;
  @Input() setIsQuizzOpen: (value:boolean) => void

  constructor() {}

  ngOnInit(): void {}

  onStartTestButtonClick(chapterNr: number) {
    console.log({ chapterNr });
    this.setIsQuizzOpen(true);
  }
}
