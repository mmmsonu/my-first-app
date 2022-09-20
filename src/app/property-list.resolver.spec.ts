import { TestBed } from '@angular/core/testing';

import { PropertyListResolver } from './property-list.resolver';

describe('PropertyListResolver', () => {
  let resolver: PropertyListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PropertyListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
