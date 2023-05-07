import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-text-content',
  templateUrl: './chapter-text-content.component.html',
  styleUrls: ['./chapter-text-content.component.scss']
})
export class ChapterTextContentComponent implements OnInit {

  @Input() content:string;

  constructor() { }

  ngOnInit(): void {
  }

}
