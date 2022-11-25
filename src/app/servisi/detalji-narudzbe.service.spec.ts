import { TestBed } from '@angular/core/testing';

import { DetaljiNarudzbeService } from './detalji-narudzbe.service';

describe('DetaljiNarudzbeService', () => {
  let service: DetaljiNarudzbeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetaljiNarudzbeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
