import { TestBed } from '@angular/core/testing';

import { ScoreUpdateService } from './score-update.service';

describe('ScoreUpdateService', () => {
  let service: ScoreUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
