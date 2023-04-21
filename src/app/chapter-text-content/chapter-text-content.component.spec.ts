import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTextContentComponent } from './chapter-text-content.component';

describe('ChapterTextContentComponent', () => {
  let component: ChapterTextContentComponent;
  let fixture: ComponentFixture<ChapterTextContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterTextContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTextContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
