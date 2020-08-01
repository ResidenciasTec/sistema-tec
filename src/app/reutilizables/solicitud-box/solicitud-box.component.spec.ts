import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudBoxComponent } from './solicitud-box.component';

describe('SolicitudBoxComponent', () => {
  let component: SolicitudBoxComponent;
  let fixture: ComponentFixture<SolicitudBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
