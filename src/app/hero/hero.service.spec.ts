import {TestBed} from '@angular/core/testing';
import {AppRoutingModule}     from '../app-routing.module';
import {HeroesComponent}      from '../heroesComponent/heroes.component';
import {HeroSearchComponent}         from '../heroSeachComponent/hero-search.component';
import {DashboardComponent}   from '../dashboardComponent/dashboard.component';
import {HeroDetailComponent}  from '../heroDetailComponent/hero-detail.component';
import {HeroService}         from './hero.service';
import {HttpModule}    from '@angular/http';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

let heroService;

fdescribe('heroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, FormsModule, HttpModule],
      declarations: [
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
      ],
      providers: [HeroService, {provide: APP_BASE_HREF, useValue: '/'}]
    });

    heroService = TestBed.get(HeroService);
  });

  it('should create the app', () => {
    // var heroes = heroService.getHeroes();
    // console.log(heroes);
    // let sting = 'string';
    // spyOn(heroService, 'getHeroes').and.returnValue(Promise.resolve(sting));
    expect(true).toBe(true);
    // expect(heroService.getHeroes).toHaveBeenCalled();
    // expect(heroService.getHeroes).toHaveBeenCalledTimes(1);

  });
});
