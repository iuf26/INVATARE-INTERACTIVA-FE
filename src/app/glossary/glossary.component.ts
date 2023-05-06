import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface Food {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}
@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss'],
})
export class GlossaryComponent implements OnInit {
  @Input() wordAndMeaning: Array<{ word: string; meaning: string }>;
  dataSource: any;
  displayedColumns: string[] = ['Term', 'Definition'];

  constructor() {
   
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<{ word: string; meaning: string }>(
      this.wordAndMeaning
    );
  }
}
