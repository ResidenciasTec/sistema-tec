import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusvehiculosComponent } from './statusvehiculos.component';

describe('StatusvehiculosComponent', () => {
  let component: StatusvehiculosComponent;
  let fixture: ComponentFixture<StatusvehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusvehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusvehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
