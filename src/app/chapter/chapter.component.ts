import {Component, OnInit, Input, ViewChild, TemplateRef} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {Comment} from "../models/comment.model";
import {CommentsService} from "../service/comments.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit {
  @Input() chapterNr: number;
  @Input() chapterDescription: string;
  @Input() setIsQuizzOpen: (value: boolean) => void;
  @Input() setQuizzChapter: (value: string) => void
  @Input() setQuizzId: (value: number) => void
  @Input() content: string;
  @Input() videoLinks: Array<string>;
  @Input() glossary: Array<{ word: string; meaning: string }>;
  @Input() userProgress: number;
  score: string;
  @Input() userResults$: Array<string>
  @Input() $results: Subject<Array<string>>;
  resultsSubs: Subscription;
  comments: Array<Comment>;

  newCommentText!: string;
  @ViewChild('addCommentDialog') addCommentDialog!: TemplateRef<any>;

  constructor(private commentsService: CommentsService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.resultsSubs = this.$results.subscribe((res: Array<string>) => {
      console.log('in subs...')
      this.userResults$ = res;
    })
  }

  getScore() {
    if (this.userResults$ && (this.chapterNr - 1 < this.userResults$.length)) {
      return `Scor: ${this.userResults$[this.chapterNr - 1]}`;
    }
    return "";
  }

  onStartTestButtonClick(chapterNr: number) {

    this.setQuizzChapter(this.chapterDescription)
    this.setQuizzId(this.chapterNr);
    this.setIsQuizzOpen(true);
  }

  isChapterDisabled() {
    return this.chapterNr > this.userProgress + 1
  }

  ngOnDestroy() {
    if (this.resultsSubs) {
      this.resultsSubs.unsubscribe();
    }
  }

  openAddCommentDialog() {
    this.dialog.open(this.addCommentDialog);
  }

  addNewComment(): void {

    //const author = localStorage.getItem('email')
    //if (author) {
      let comment = new Comment('Robi', this.newCommentText, new Date(), this.chapterNr);
      this.commentsService.addComment(comment).subscribe((comment) => {
        this.closeAddCommentDialog();
        console.log(comment);
        this.getAllCommentsByChapterId();

      });
    //}
  }

  getAllCommentsByChapterId() {
    this.commentsService.getAllCommentsByChapterNumber(this.chapterNr).subscribe((comments) => {
      console.log(comments);
        this.comments = comments;
      }
    );
  }

  closeAddCommentDialog() {
    this.dialog.closeAll();
  }

}
