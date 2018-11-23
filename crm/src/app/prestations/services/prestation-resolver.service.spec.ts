import { TestBed } from '@angular/core/testing';

import { PrestationResolverService } from './prestation-resolver.service';

describe('PrestationResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestationResolverService = TestBed.get(PrestationResolverService);
    expect(service).toBeTruthy();
  });
});
