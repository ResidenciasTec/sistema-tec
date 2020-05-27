import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSubdireccionComponent } from './editar-subdireccion.component';

describe('EditarSubdireccionComponent', () => {
  let component: EditarSubdireccionComponent;
  let fixture: ComponentFixture<EditarSubdireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSubdireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSubdireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
