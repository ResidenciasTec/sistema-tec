import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMantenimientoComponent } from './ver-mantenimiento.component';

describe('VerMantenimientoComponent', () => {
  let component: VerMantenimientoComponent;
  let fixture: ComponentFixture<VerMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
