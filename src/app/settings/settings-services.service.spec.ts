import { TestBed } from '@angular/core/testing';

import { SettingsServicesService } from './settings-services.service';

describe('SettingsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsServicesService = TestBed.get(SettingsServicesService);
    expect(service).toBeTruthy();
  });
});
