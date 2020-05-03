import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServiceComponent } from './our-service.component';

describe('OurServiceComponent', () => {
  let component: OurServiceComponent;
  let fixture: ComponentFixture<OurServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
