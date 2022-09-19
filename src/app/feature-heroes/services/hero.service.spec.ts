import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from './message.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, MessageService],
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
