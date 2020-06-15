import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCarouselComponent } from './img-carousel.component';

describe('ImgCarouselComponent', () => {
  let component: ImgCarouselComponent;
  let fixture: ComponentFixture<ImgCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
