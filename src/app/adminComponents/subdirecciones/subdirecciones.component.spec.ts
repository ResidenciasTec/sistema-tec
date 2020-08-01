import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdireccionesComponent } from './subdirecciones.component';

describe('SubdireccionesComponent', () => {
  let component: SubdireccionesComponent;
  let fixture: ComponentFixture<SubdireccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdireccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
