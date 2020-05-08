import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCardsDatosComponent } from './solicitud-cards-datos.component';

describe('SolicitudCardsDatosComponent', () => {
  let component: SolicitudCardsDatosComponent;
  let fixture: ComponentFixture<SolicitudCardsDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudCardsDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudCardsDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
