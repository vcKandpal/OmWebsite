import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeAVolunteerComponent } from './be-avolunteer.component';

describe('BeAVolunteerComponent', () => {
  let component: BeAVolunteerComponent;
  let fixture: ComponentFixture<BeAVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeAVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeAVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
