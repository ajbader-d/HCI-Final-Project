import { TestBed } from '@angular/core/testing';

import { ExpServiceService } from './exp-service.service';

describe('ExpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpServiceService = TestBed.get(ExpServiceService);
    expect(service).toBeTruthy();
  });
});
