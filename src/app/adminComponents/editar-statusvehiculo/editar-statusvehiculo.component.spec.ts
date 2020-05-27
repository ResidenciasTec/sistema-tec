import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarStatusvehiculoComponent } from './editar-statusvehiculo.component';

describe('EditarStatusvehiculoComponent', () => {
  let component: EditarStatusvehiculoComponent;
  let fixture: ComponentFixture<EditarStatusvehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarStatusvehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarStatusvehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
