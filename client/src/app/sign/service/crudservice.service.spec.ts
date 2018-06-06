import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { CrudserviceService } from './crudservice.service';

describe('CrudserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CrudserviceService]
    });
  });

  it('should be created', inject([CrudserviceService], (service: CrudserviceService) => {
    expect(service).toBeTruthy();
  }));
});
