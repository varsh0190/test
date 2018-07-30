import { TestBed, inject } from '@angular/core/testing';

import { VarshaLibraryService } from './varsha-library.service';

describe('VarshaLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VarshaLibraryService]
    });
  });

  it('should be created', inject([VarshaLibraryService], (service: VarshaLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
