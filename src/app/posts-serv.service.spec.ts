import { TestBed } from '@angular/core/testing';

import { PostsServService } from './posts-serv.service';

describe('PostsServService', () => {
  let service: PostsServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
