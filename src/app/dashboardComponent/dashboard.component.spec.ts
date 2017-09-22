import {TestBed, ComponentFixture} from '@angular/core/testing';
import {AppRoutingModule}     from '../app-routing.module';
import {DashboardComponent}   from './dashboard.component';
import {HeroDetailComponent}  from '../heroDetailComponent/hero-detail.component';
import {HeroesComponent}      from '../heroesComponent/heroes.component';
import {HeroSearchComponent}         from '../heroSeachComponent/hero-search.component';
import {HeroService}         from '../hero/hero.service';
import {HttpModule}    from '@angular/http';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

let fixture: ComponentFixture<DashboardComponent>;
let component, heroService;

describe('DashboardComponent', () => {
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

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    heroService = TestBed.get(HeroService);
  });

  it('should create the app', () => {
    let sting = 'string';
    spyOn(heroService, 'getHeroes').and.returnValue(Promise.resolve(sting));

    component.ngOnInit();
    expect(heroService.getHeroes).toHaveBeenCalled();
    expect(heroService.getHeroes).toHaveBeenCalledTimes(1);
    // fixture.detectChanges();
    console.log(component.heroes);
    // console.log(fixture);
    // expect(component.heroes).toBe(sting);
// console.log(spy);
    // expect(el.nativeElement.textContent.trim()).toBe('Logout');
    // expect(true).toBe(true);
  });
});
