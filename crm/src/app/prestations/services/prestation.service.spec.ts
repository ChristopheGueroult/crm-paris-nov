import { TestBed } from '@angular/core/testing';

import { PrestationService } from './prestation.service';

describe('PrestationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestationService = TestBed.get(PrestationService);
    expect(service).toBeTruthy();
  });
});
