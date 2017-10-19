//TODO: refactor this imports for all project
import {TestBed, ComponentFixture, tick, fakeAsync} from '@angular/core/testing';
import {AppRoutingModule}     from '../app-routing.module';
import {DashboardComponent}   from '../dashboardComponent/dashboard.component';
import {HeroDetailComponent}  from '../heroDetailComponent/hero-detail.component';
import {HeroesComponent}      from './heroes.component';
import {HeroSearchComponent}  from '../heroSeachComponent/hero-search.component';
import {HeroService}         from '../hero/hero.service';
import {HttpModule}    from '@angular/http';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common'
import {Router}            from '@angular/router';

let fixture: ComponentFixture<HeroesComponent>;
let component, heroService;

const HERO_ONE = {
  id: 1,
  name: 'HeroNrOne'
};

const HERO_TWO = {
  id: 2,
  name: 'WillBeAlwaysTheSecond'
};

const HERO_THREE = {
  id: 3,
  name: 'HeroThree'
};

let router = {
  navigate: jasmine.createSpy('navigate')
};

describe('HeroesComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, FormsModule, HttpModule],
      declarations: [
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
      ],
      providers: [HeroService, {provide: APP_BASE_HREF, useValue: '/'}, {provide: Router, useValue: router}]
    });

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    heroService = TestBed.get(HeroService);
  });

  it('getHeroes()', fakeAsync(() => {
    spyOn(heroService, 'getHeroes').and.returnValue(Promise.resolve([HERO_ONE, HERO_TWO]));
    component.getHeroes();
    expect(heroService.getHeroes).toHaveBeenCalled();
    expect(heroService.getHeroes).toHaveBeenCalledTimes(1);
    tick();
    expect(component.heroes.length).toEqual(2, 'should get two heroes');
    expect(component.heroes[0]).toEqual(HERO_ONE, 'should be hero one');
    expect(component.heroes[1]).toEqual(HERO_TWO, 'should be hero two');
  }));

  it('onSelect()', () => {
    component.onSelect(HERO_ONE);
    expect(component.selectedHero).toEqual(HERO_ONE, 'selected hero is hero one');
  });

  it('gotoDetail()', () => {
    component.selectedHero = HERO_ONE;
    component.gotoDetail();
    expect(router.navigate).toHaveBeenCalledWith(['/detail', HERO_ONE.id]);
  });

  it('add() with not empty value', fakeAsync(() => {
    spyOn(heroService, 'create').and.returnValue(Promise.resolve(HERO_THREE));
    component.heroes = [HERO_ONE, HERO_TWO];
    expect(component.heroes.length).toEqual(2, 'should be two heroes');
    component.add(HERO_THREE.name);
    expect(heroService.create).toHaveBeenCalled();
    expect(heroService.create).toHaveBeenCalledTimes(1);
    tick();
    expect(component.heroes.length).toEqual(3, 'should get three heroes');
    expect(component.heroes[2]).toEqual(HERO_THREE, 'should be HeroThree');
    expect(component.selectedHero).toEqual(null, 'selectedHero should be null');
  }));

  it('add() with empty value', fakeAsync(() => {
    spyOn(heroService, 'create');
    component.add(' ');
    expect(heroService.create).not.toHaveBeenCalled();
  }));

  it('delete()', fakeAsync(() => {
    spyOn(heroService, 'delete').and.returnValue(Promise.resolve(null));
    component.heroes = [HERO_ONE, HERO_TWO, HERO_THREE];
    component.selectedHero = HERO_THREE;
    expect(component.heroes.length).toEqual(3, 'should be three heroes');
    expect(component.selectedHero).toEqual(HERO_THREE, 'selected hero is HeroThree');
    component.delete(HERO_THREE);
    expect(heroService.delete).toHaveBeenCalled();
    expect(heroService.delete).toHaveBeenCalledTimes(1);
    tick();
    expect(component.heroes.length).toEqual(2, 'should be two heroes');
    expect(component.selectedHero).toEqual(null, 'selectedHero should be null');
  }));

  it('ngOnInit()', () => {
    spyOn(component, 'getHeroes');
    component.ngOnInit();
    expect(component.getHeroes).toHaveBeenCalled();
    expect(component.getHeroes).toHaveBeenCalledTimes(1);
  });

});
