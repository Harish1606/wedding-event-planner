import { TestBed } from '@angular/core/testing';

import { VendorLoginService } from './vendor-login.service';

describe('VendorLoginService', () => {
  let service: VendorLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
