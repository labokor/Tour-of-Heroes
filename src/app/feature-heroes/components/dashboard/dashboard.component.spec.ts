import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HeroService } from '../../services/hero.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeroServiceMock } from '../../services/hero-service-mock';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        // { provide: HeroService, useValue: { getHeroes: () => of([{ id: 5, name: 'Papa' }]) }, // -- igy is lehet
        { provide: HeroService, useClass: HeroServiceMock },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get heroes', () => {
    component.getHeroes();
    console.log(component.heroes);
    expect(component.heroes).toBeTruthy();
  });
});
