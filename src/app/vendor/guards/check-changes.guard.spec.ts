import { TestBed } from '@angular/core/testing';

import { CheckChangesGuard } from './check-changes.guard';

describe('CheckChangesGuard', () => {
  let guard: CheckChangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckChangesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
