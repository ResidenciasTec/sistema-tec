import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarStatusorderComponent } from './editar-statusorder.component';

describe('EditarStatusorderComponent', () => {
  let component: EditarStatusorderComponent;
  let fixture: ComponentFixture<EditarStatusorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarStatusorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarStatusorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
