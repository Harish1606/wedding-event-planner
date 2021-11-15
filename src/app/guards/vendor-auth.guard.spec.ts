import { TestBed } from '@angular/core/testing';

import { VendorAuthGuard } from './vendor-auth.guard';

describe('VendorAuthGuard', () => {
  let guard: VendorAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VendorAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
