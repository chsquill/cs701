import { TestBed } from '@angular/core/testing';

import { ItemProviderService } from './item-provider.service';

describe('ItemProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemProviderService = TestBed.get(ItemProviderService);
    expect(service).toBeTruthy();
  });
});
