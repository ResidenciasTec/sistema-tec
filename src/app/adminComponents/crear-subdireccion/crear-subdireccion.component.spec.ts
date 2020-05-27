import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSubdireccionComponent } from './crear-subdireccion.component';

describe('CrearSubdireccionComponent', () => {
  let component: CrearSubdireccionComponent;
  let fixture: ComponentFixture<CrearSubdireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSubdireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSubdireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
