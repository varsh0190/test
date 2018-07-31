import { TestBed, inject } from '@angular/core/testing';

import { TetlibService } from './tetlib.service';

describe('TetlibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TetlibService]
    });
  });

  it('should be created', inject([TetlibService], (service: TetlibService) => {
    expect(service).toBeTruthy();
  }));
});
