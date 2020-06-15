import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateUSComponent } from './donate-us.component';

describe('DonateUSComponent', () => {
  let component: DonateUSComponent;
  let fixture: ComponentFixture<DonateUSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateUSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
