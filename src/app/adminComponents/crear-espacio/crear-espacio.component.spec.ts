import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEspacioComponent } from './crear-espacio.component';

describe('CrearEspacioComponent', () => {
  let component: CrearEspacioComponent;
  let fixture: ComponentFixture<CrearEspacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEspacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
