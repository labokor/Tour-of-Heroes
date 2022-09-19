import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesHomeComponent } from './heroes-home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HeroesHomeComponent;
  let fixture: ComponentFixture<HeroesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesHomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    const fixture = TestBed.createComponent(HeroesHomeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'Tour of Heroes app is running!'
  //   );
  // });
});
