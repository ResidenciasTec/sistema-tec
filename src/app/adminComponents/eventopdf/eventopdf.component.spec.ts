import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventopdfComponent } from './eventopdf.component';

describe('EventopdfComponent', () => {
  let component: EventopdfComponent;
  let fixture: ComponentFixture<EventopdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventopdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventopdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
