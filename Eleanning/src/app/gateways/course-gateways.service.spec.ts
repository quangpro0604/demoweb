import { TestBed } from '@angular/core/testing';

import { CourseGatewaysService } from './course-gateways.service';

describe('CourseGatewaysService', () => {
  let service: CourseGatewaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseGatewaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
