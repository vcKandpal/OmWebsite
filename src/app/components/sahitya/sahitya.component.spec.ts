import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SahityaComponent } from './sahitya.component';

describe('SahityaComponent', () => {
  let component: SahityaComponent;
  let fixture: ComponentFixture<SahityaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SahityaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SahityaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
