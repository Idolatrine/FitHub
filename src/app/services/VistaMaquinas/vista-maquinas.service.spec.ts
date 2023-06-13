import { TestBed } from '@angular/core/testing';

import { MaquinasPublicasService } from './vista-maquinas.service';

describe('VistaPerfilService', () => {
  let service: MaquinasPublicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquinasPublicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
