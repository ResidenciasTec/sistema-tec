import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudBotonesComponent } from './solicitud-botones.component';

describe('SolicitudBotonesComponent', () => {
  let component: SolicitudBotonesComponent;
  let fixture: ComponentFixture<SolicitudBotonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudBotonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
