import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSalidaComponent } from './crear-salida.component';

describe('CrearSalidaComponent', () => {
  let component: CrearSalidaComponent;
  let fixture: ComponentFixture<CrearSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
