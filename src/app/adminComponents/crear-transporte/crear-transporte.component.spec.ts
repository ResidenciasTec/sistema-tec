import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTransporteComponent } from './crear-transporte.component';

describe('CrearTransporteComponent', () => {
  let component: CrearTransporteComponent;
  let fixture: ComponentFixture<CrearTransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
