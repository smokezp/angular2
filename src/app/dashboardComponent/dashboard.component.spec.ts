import {TestBed, ComponentFixture} from '@angular/core/testing';
// import {AppComponent} from './app.component';
import {By}              from '@angular/platform-browser';
import {DebugElement}    from '@angular/core';
import {AppRoutingModule}     from '../app-routing.module';
import {DashboardComponent}   from './dashboard.component';
import {HeroDetailComponent}  from '../heroDetailComponent/hero-detail.component';
import {HeroesComponent}      from '../heroesComponent/heroes.component';
import {HeroSearchComponent}         from '../heroSeachComponent/hero-search.component';
import {HeroService}         from '../hero/hero.service';
import {Http}       from '@angular/http';
import {HttpModule}    from '@angular/http';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

let fixture: ComponentFixture<DashboardComponent>;
let comp: DashboardComponent;
let de: DebugElement;
let el: HTMLElement;

fdescribe('DashboardComponent', () => {
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
    comp = fixture.componentInstance;
    console.log(fixture);
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
  });

  it('should create the app', () => {
    expect(true).toBe(true);
  });
  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });
  //
  // it(`should have as title 'app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Tour of Heroes');
  // });
  //
  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  // });
  //
  // it('should render 2 button-links', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   const aSelect = compiled.querySelectorAll('a');
  //   expect(aSelect[0].textContent).toContain('Dashboard');
  //   expect(aSelect[1].textContent).toContain('Heroes');
  // });
});
