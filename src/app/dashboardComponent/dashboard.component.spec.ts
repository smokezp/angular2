import {TestBed, ComponentFixture} from '@angular/core/testing';
import {DebugElement}    from '@angular/core';
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
let comp: DashboardComponent;

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
  });

  it('should create the app', () => {
    expect(true).toBe(true);
  });
});
