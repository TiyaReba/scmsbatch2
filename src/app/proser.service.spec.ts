import { TestBed } from '@angular/core/testing';

import { ProserService } from './proser.service';

describe('ProserService', () => {
  let service: ProserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
