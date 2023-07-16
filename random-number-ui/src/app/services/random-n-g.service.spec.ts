import { TestBed } from '@angular/core/testing';

import { RandomNGService } from './random-n-g.service';

describe('RandomNGService', () => {
  let service: RandomNGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomNGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
