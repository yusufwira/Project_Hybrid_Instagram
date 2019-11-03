import { TestBed } from '@angular/core/testing';

import { PostingsService } from './postings.service';

describe('PostingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostingsService = TestBed.get(PostingsService);
    expect(service).toBeTruthy();
  });
});
