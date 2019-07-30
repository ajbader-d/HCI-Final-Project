import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPagePage } from './slider-page.page';

describe('SliderPagePage', () => {
  let component: SliderPagePage;
  let fixture: ComponentFixture<SliderPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
