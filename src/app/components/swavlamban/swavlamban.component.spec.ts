import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwavlambanComponent } from './swavlamban.component';

describe('SwavlambanComponent', () => {
  let component: SwavlambanComponent;
  let fixture: ComponentFixture<SwavlambanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwavlambanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwavlambanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
