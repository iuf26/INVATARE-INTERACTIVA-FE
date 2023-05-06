import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedLinkComponent } from './suggested-link.component';

describe('SuggestedLinkComponent', () => {
  let component: SuggestedLinkComponent;
  let fixture: ComponentFixture<SuggestedLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
