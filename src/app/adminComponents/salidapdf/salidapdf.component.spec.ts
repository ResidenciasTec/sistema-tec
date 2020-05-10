import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidapdfComponent } from './salidapdf.component';

describe('SalidapdfComponent', () => {
  let component: SalidapdfComponent;
  let fixture: ComponentFixture<SalidapdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidapdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidapdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
