export class Comment {
  id?: number;
  text: string;
  author: string;
  date: Date;
  chapterId: number;

  constructor( author: string, text: string, date: Date, chapterId: number) {
    this.author = author;
    this.text = text;
    this.date = date;
    this.chapterId = chapterId;
  }
}
