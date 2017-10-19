import {TestBed, ComponentFixture, tick, fakeAsync} from '@angular/core/testing';
import {AppRoutingModule}     from '../app-routing.module';
import {DashboardComponent}   from '../dashboardComponent/dashboard.component';
import {HeroDetailComponent}  from '../heroDetailComponent/hero-detail.component';
import {HeroesComponent}      from '../heroesComponent/heroes.component';
import {HeroSearchComponent}         from './hero-search.component';
import {HeroSearchService} from './hero-search.service';
import {HttpModule}    from '@angular/http';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common'
import {Router}            from '@angular/router';
import {Observable} from 'rxjs/Observable';

let fixture: ComponentFixture<HeroSearchComponent>;
let component, heroSearchService;

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

describe('HeroSearchComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, FormsModule, HttpModule],
      declarations: [
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
      ],
      providers: [HeroSearchService, {provide: APP_BASE_HREF, useValue: '/'}, {provide: Router, useValue: router}]
    });

    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    heroSearchService = fixture.debugElement.injector.get(HeroSearchService);
  });

  it('ngOnInit()', fakeAsync(() => {
    spyOn(heroSearchService, 'search').and.returnValue(Observable.of([HERO_ONE, HERO_TWO]));
    fixture.detectChanges();
    component.ngOnInit();
    component.searchTerms.next('one');
    tick(300);
    expect(heroSearchService.search).toHaveBeenCalled();
    expect(heroSearchService.search).toHaveBeenCalledTimes(1);
    console.log(component.heroes);
  }));

  it('search()', () => {
    const findStr = 'dsfds';
    component.searchTerms.subscribe((term: String) => {
      expect(term).toEqual(findStr, 'should get changed str');
    });
    component.search(findStr);
  });

  it('gotoDetail()', () => {
    component.gotoDetail(HERO_ONE);
    expect(router.navigate).toHaveBeenCalledWith(['/detail', HERO_ONE.id]);
  });

});
