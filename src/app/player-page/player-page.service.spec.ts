import { TestBed } from '@angular/core/testing';

import { PlayerPageService } from './player-page.service';

describe('PlayerPageService', () => {
  let service: PlayerPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
