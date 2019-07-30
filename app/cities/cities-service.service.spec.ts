import { TestBed } from '@angular/core/testing';

import { CitiesServiceService } from './cities-service.service';

describe('CitiesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitiesServiceService = TestBed.get(CitiesServiceService);
    expect(service).toBeTruthy();
  });
});
