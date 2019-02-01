import { TestBed } from '@angular/core/testing';

import { WindowHostService } from '@shared/services/window-host.service';

describe('WindowHostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindowHostService = TestBed.get(WindowHostService);
    expect(service).toBeTruthy();
  });
});
