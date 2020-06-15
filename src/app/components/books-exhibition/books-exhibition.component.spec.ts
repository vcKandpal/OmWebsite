import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksExhibitionComponent } from './books-exhibition.component';

describe('BooksExhibitionComponent', () => {
  let component: BooksExhibitionComponent;
  let fixture: ComponentFixture<BooksExhibitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksExhibitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
