import { TestBed, inject } from '@angular/core/testing';

import { JobDataService } from './job-data.service';

describe('JobDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobDataService]
    });
  });

  it('should be created', inject([JobDataService], (service: JobDataService) => {
    expect(service).toBeTruthy();
  }));
});
