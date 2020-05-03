import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysThoughtComponent } from './todays-thought.component';

describe('TodaysThoughtComponent', () => {
  let component: TodaysThoughtComponent;
  let fixture: ComponentFixture<TodaysThoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysThoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
