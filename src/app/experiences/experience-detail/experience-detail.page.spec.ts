import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailPage } from './experience-detail.page';

describe('ExperienceDetailPage', () => {
  let component: ExperienceDetailPage;
  let fixture: ComponentFixture<ExperienceDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
