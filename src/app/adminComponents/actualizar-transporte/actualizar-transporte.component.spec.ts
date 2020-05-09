import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTransporteComponent } from './actualizar-transporte.component';

describe('ActualizarTransporteComponent', () => {
  let component: ActualizarTransporteComponent;
  let fixture: ComponentFixture<ActualizarTransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarTransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
