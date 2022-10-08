import { TestBed } from '@angular/core/testing';

import { CoreCatalogService } from './core-catalog.service';

describe('CoreCatalogService', () => {
  let service: CoreCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
