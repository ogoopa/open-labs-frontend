import { TestBed } from '@angular/core/testing';

import { AlticciCalculateService } from './alticci-calculate.service';

describe('AlticceCalculateService', () => {
  let service: AlticciCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlticciCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
