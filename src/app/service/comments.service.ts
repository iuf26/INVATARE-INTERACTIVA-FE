import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Comment} from "../models/comment.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private baseUrl = "http://localhost:8080/comments"

  constructor(private http: HttpClient) { }

  getAllCommentsByChapterNumber(chapter: number): Observable<Array<Comment>> {
      return this.http.get<Array<Comment>>(`${this.baseUrl}/getCommentsByChapter/${chapter}`, );
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.baseUrl}`, comment);
  }
}
