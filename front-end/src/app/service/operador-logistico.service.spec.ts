import { TestBed } from '@angular/core/testing';

import { OperadorLogisticoService } from './operador-logistico.service';

describe('OperadorLogisticoService', () => {
  let service: OperadorLogisticoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperadorLogisticoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
