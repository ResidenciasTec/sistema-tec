import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientopdfComponent } from './mantenimientopdf.component';

describe('MantenimientopdfComponent', () => {
  let component: MantenimientopdfComponent;
  let fixture: ComponentFixture<MantenimientopdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientopdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientopdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
