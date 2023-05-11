import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-chapter-comments',
  templateUrl: './chapter-comments.component.html',
  styleUrls: ['./chapter-comments.component.scss']
})
export class ChapterCommentsComponent implements OnInit {


  @Input() username!: string;
  @Input() commentText!: string;
  @Input() commentDate!: Date;

  constructor(private datePipe: DatePipe) {

  }

  ngOnInit(): void {
  }


  formatCommentDate(): string {
    return <string>this.datePipe.transform(this.commentDate, 'medium');
  }


}
