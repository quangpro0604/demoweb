import { TestBed } from '@angular/core/testing';

import { UserGatewaysService } from './user-gateways.service';

describe('UserGatewaysService', () => {
  let service: UserGatewaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGatewaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
