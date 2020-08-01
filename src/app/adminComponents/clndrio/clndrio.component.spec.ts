import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClndrioComponent } from './clndrio.component';

describe('ClndrioComponent', () => {
  let component: ClndrioComponent;
  let fixture: ComponentFixture<ClndrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClndrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClndrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
