import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInformationPage } from './basic-information.page';

describe('BasicInformationPage', () => {
  let component: BasicInformationPage;
  let fixture: ComponentFixture<BasicInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
