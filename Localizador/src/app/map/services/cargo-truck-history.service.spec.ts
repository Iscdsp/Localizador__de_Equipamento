import { TestBed } from '@angular/core/testing';

import { CargoTruckHistoryService } from './cargo-truck-history.service';

describe('CargoTruckHistoryService', () => {
  let service: CargoTruckHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargoTruckHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
