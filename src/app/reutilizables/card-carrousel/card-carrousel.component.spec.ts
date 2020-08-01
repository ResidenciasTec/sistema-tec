import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarrouselComponent } from './card-carrousel.component';

describe('CardCarrouselComponent', () => {
  let component: CardCarrouselComponent;
  let fixture: ComponentFixture<CardCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
