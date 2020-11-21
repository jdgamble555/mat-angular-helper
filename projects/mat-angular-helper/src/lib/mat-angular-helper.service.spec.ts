import { TestBed } from '@angular/core/testing';

import { MatAngularHelperService } from './mat-angular-helper.service';

describe('MatAngularHelperService', () => {
  let service: MatAngularHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatAngularHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
