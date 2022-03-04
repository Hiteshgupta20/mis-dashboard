import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesheetComponent } from './incomesheet.component';

describe('IncomesheetComponent', () => {
  let component: IncomesheetComponent;
  let fixture: ComponentFixture<IncomesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
