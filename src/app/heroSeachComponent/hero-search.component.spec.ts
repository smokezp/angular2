import {TestBed, ComponentFixture, tick, fakeAsync} from '@angular/core/testing';
import {AppRoutingModule}     from '../app-routing.module';
import {DashboardComponent}   from '../dashboardComponent/dashboard.component';
import {HeroDetailComponent}  from '../heroDetailComponent/hero-detail.component';
import {HeroesComponent}      from '../heroesComponent/heroes.component';
import {HeroSearchComponent}         from './hero-search.component';
import {HeroSearchService} from './hero-search.service';
import {HttpModule, Response, ResponseOptions}    from '@angular/http';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common'
import {Router}            from '@angular/router';

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
    heroSearchService = TestBed.get(HeroSearchService);
    // fixture.detectChanges();
  });

  // it('ngOnInit()', fakeAsync(() => {
  //   fixture.detectChanges();
  //   component.ngOnInit();
  //   // tick();
  //   // let sting = 'string';
  //   // spyOn(heroSearchService, 'search').and.returnValue('12321');
  //
  //   // component.searchTerms.updateValue("testing");
  //
  //   component.searchTerms.next('sdssssdasd');
  //   // tick();
  //   tick(300);
  //   // this.lastConnection.mockRespond(new Response(new ResponseOptions({
  //   //   body: JSON.stringify({data: [HERO_ONE.name, HERO_TWO.name]}),
  //   // })));
  //
  //
  //   // expect(heroSearchService.search).toHaveBeenCalled();
  //   // expect(heroSearchService.search).toHaveBeenCalledTimes(1);
  //   // fixture.detectChanges();
  //   // fixture.whenStable().then(() => {
  //   //   expect(component.heroes).toEqual('trin');
  //   //   done();
  //   // });
  //   expect(true).toBe(true);
  //
  // }));


  // it('search()', () => {
  //   component.search('dsfds');
  //   // fixture.detectChanges();
  //   // component.searchTerms.switchMap(term => console.log(term));
  //   console.log(component.searchTerms);
  // });

  it('gotoDetail()', () => {
    component.gotoDetail(HERO_ONE);
    expect(router.navigate).toHaveBeenCalledWith(['/detail', 1]);
  });
});
