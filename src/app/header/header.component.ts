import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:string = localStorage.getItem('email') || "";

  constructor() { }

  ngOnInit(): void {
  }

  getUser(){
    return localStorage.getItem("email");
  }

}
