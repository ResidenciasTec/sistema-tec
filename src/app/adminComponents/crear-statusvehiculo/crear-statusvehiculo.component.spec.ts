import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearStatusvehiculoComponent } from './crear-statusvehiculo.component';

describe('CrearStatusvehiculoComponent', () => {
  let component: CrearStatusvehiculoComponent;
  let fixture: ComponentFixture<CrearStatusvehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearStatusvehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearStatusvehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
