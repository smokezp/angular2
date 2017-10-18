import {TestBed, ComponentFixture, tick, fakeAsync} from '@angular/core/testing';
import {AppRoutingModule}     from '../app-routing.module';
import {DashboardComponent}   from '../dashboardComponent/dashboard.component';
import {HeroDetailComponent}  from './hero-detail.component';
import {HeroesComponent}      from '../heroesComponent/heroes.component';
import {HeroSearchComponent}  from '../heroSeachComponent/hero-search.component';
import {HeroService}         from '../hero/hero.service';
// import {HeroSearchService} from './hero-search.service';
import {HttpModule, Response, ResponseOptions}    from '@angular/http';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common'
// import {Router}            from '@angular/router';

let fixture: ComponentFixture<HeroDetailComponent>;
let component, heroService;

const HERO_ONE = {
  id: 1,
  name: 'HeroNrOne'
};

const HERO_TWO = {
  id: 2,
  name: 'WillBeAlwaysTheSecond'
};

describe('HeroDetailComponent', () => {
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

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    heroService = TestBed.get(HeroService);
    // fixture.detectChanges();
  });

  // it('goBack()', () => {
  //   component.goBack();
  //   // component.gotoDetail(HERO_ONE);
  //   // expect(router.navigate).toHaveBeenCalledWith(['/detail', 1]);
  //   expect(true).toBe(true);
  // });

  it('getHero()', fakeAsync(() => {
    let result: any;
    spyOn(heroService, 'getHeroes').and.returnValue(Promise.resolve([HERO_ONE, HERO_TWO]));
    component.getHero(1).then((heroes: String[]) => result = heroes);
    expect(heroService.getHeroes).toHaveBeenCalled();
    expect(heroService.getHeroes).toHaveBeenCalledTimes(1);
    tick();
    expect(result.name).toEqual(HERO_ONE.name, ' name HERO_ONE');
    expect(result.id).toEqual(HERO_ONE.id, ' id HERO_ONE');
  }));

  it('save()', fakeAsync(() => {
    spyOn(heroService, 'update').and.returnValue(Promise.resolve(HERO_TWO));
    spyOn(component, 'goBack');
    component.save();
    expect(heroService.update).toHaveBeenCalled();
    expect(heroService.update).toHaveBeenCalledTimes(1);
    tick();
    expect(component.goBack).toHaveBeenCalled();
    expect(component.goBack).toHaveBeenCalledTimes(1);
  }));

  // it('ngOnInit()', fakeAsync(() => {
  //   component.ngOnInit();
  //   expect(true).toBe(true);
  // }));

});
