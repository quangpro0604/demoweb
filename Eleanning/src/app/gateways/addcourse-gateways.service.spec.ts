import { TestBed } from '@angular/core/testing';

import { AddcourseGatewaysService } from './addcourse-gateways.service';

describe('AddcourseGatewaysService', () => {
  let service: AddcourseGatewaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcourseGatewaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
