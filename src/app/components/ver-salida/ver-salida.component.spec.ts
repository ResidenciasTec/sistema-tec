import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSalidaComponent } from './ver-salida.component';

describe('VerSalidaComponent', () => {
  let component: VerSalidaComponent;
  let fixture: ComponentFixture<VerSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
