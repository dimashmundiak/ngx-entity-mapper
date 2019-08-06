import { TestBed } from '@angular/core/testing';

import { NgxEntityMapperService } from './ngx-entity-mapper.service';

describe('NgxEntityMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxEntityMapperService = TestBed.get(NgxEntityMapperService);
    expect(service).toBeTruthy();
  });
});
