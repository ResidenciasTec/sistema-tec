import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearStatusorderComponent } from './crear-statusorder.component';

describe('CrearStatusorderComponent', () => {
  let component: CrearStatusorderComponent;
  let fixture: ComponentFixture<CrearStatusorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearStatusorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearStatusorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
