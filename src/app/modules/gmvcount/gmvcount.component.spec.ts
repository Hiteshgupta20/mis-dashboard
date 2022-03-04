import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmvcountComponent } from './gmvcount.component';

describe('GmvcountComponent', () => {
  let component: GmvcountComponent;
  let fixture: ComponentFixture<GmvcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmvcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmvcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
