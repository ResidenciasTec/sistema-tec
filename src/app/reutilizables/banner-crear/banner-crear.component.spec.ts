import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCrearComponent } from './banner-crear.component';

describe('BannerCrearComponent', () => {
  let component: BannerCrearComponent;
  let fixture: ComponentFixture<BannerCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
