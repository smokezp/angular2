import {TestBed, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppRoutingModule} from '../app-routing.module';
import {DashboardComponent} from '../dashboardComponent/dashboard.component';
import {HeroDetailComponent} from '../heroDetailComponent/hero-detail.component';
import {HeroesComponent} from '../heroesComponent/heroes.component';
import {HeroSearchComponent} from '../heroSeachComponent/hero-search.component';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

let fixture: ComponentFixture<AppComponent>, app, comp;

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, FormsModule],
      declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    comp = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app'`, () => {
    expect(app.title).toEqual('Tour of Heroes');
  });

  it('should render title in a h1 tag', () => {
    expect(comp.querySelector('h1').textContent).toContain('Tour of Heroes');
  });

  it('should render 2 button-links', () => {
    const aSelect = comp.querySelectorAll('a');
    expect(aSelect[0].textContent).toContain('Dashboard');
    expect(aSelect[1].textContent).toContain('Heroes');
    expect(aSelect[2].textContent).toContain('Coverage');
  });
});
