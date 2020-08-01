import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusordersComponent } from './statusorders.component';

describe('StatusordersComponent', () => {
  let component: StatusordersComponent;
  let fixture: ComponentFixture<StatusordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
