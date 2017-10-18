//TODO: refactor this imports for all project
import {TestBed, ComponentFixture, tick, fakeAsync} from '@angular/core/testing';
import {AppRoutingModule}     from '../app-routing.module';
import {DashboardComponent}   from '../dashboardComponent/dashboard.component';
import {HeroDetailComponent}  from '../heroDetailComponent/hero-detail.component';
import {HeroesComponent}      from './heroes.component';
import {HeroSearchComponent}  from '../heroSeachComponent/hero-search.component';
import {HeroService}         from '../hero/hero.service';
// import {HeroSearchService} from './hero-search.service';
import {HttpModule, Response, ResponseOptions}    from '@angular/http';
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
    // fixture.detectChanges();
  });

  // it('goBack()', () => {
  //   component.goBack();
  //   // component.gotoDetail(HERO_ONE);
  //   // expect(router.navigate).toHaveBeenCalledWith(['/detail', 1]);
  //   expect(true).toBe(true);
  // });

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
    expect(component.selectedHero).toEqual(HERO_ONE, 'should be hero one');
  });

  it('gotoDetail()', () => {
    component.selectedHero = HERO_ONE;
    component.gotoDetail();
    expect(router.navigate).toHaveBeenCalledWith(['/detail', HERO_ONE.id]);
  });

  // fit('add()', fakeAsync(() => {
  //   spyOn(heroService, 'getHeroes').and.returnValue(Promise.resolve(HERO_ONE));
  //   component.add('dddd');
  //   tick();
  //   // expect(router.navigate).toHaveBeenCalledWith(['/detail', HERO_ONE.id]);
  //   expect(true).toBe(true);
  // }));

  // it('save()', fakeAsync(() => {
  //   spyOn(heroService, 'update').and.returnValue(Promise.resolve(HERO_TWO));
  //   spyOn(component, 'goBack');
  //   component.save();
  //   expect(heroService.update).toHaveBeenCalled();
  //   expect(heroService.update).toHaveBeenCalledTimes(1);
  //   tick();
  //   expect(component.goBack).toHaveBeenCalled();
  //   expect(component.goBack).toHaveBeenCalledTimes(1);
  // }));

  // fit('ngOnInit()', fakeAsync(() => {
  //   component.ngOnInit();
  //   expect(true).toBe(true);
  // }));

});
