import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSalidaComponent } from './actualizar-salida.component';

describe('ActualizarSalidaComponent', () => {
  let component: ActualizarSalidaComponent;
  let fixture: ComponentFixture<ActualizarSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
