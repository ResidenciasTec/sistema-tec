import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMantenimientoComponent } from './crear-mantenimiento.component';

describe('CrearMantenimientoComponent', () => {
  let component: CrearMantenimientoComponent;
  let fixture: ComponentFixture<CrearMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
