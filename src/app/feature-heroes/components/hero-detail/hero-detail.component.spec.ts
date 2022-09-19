import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HeroServiceMock } from '../../services/hero-service-mock';
import { HeroService } from '../../services/hero.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

export class ActivatedRouteMock {
  public paramMap = of(
    convertToParamMap({
      id: '10',
    })
  );
}

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1, // -- represents the hero id
              },
            },
          },
        },
        { provide: HeroService, useClass: HeroServiceMock },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
