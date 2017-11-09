import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './appComponent/app.component';
import {HeroDetailComponent} from './heroDetailComponent/hero-detail.component';
import {HeroesComponent} from './heroesComponent/heroes.component';
import {HeroService} from './hero/hero.service';
import {UserService} from './usersComponent/user.service';


import {DashboardComponent} from './dashboardComponent/dashboard.component';
import {HeroSearchComponent} from './heroSeachComponent/hero-search.component';
import {LoginComponent} from './loginComponent/login.component';
import {RegisterComponent} from './registerComponent/register.component';
import {UsersComponent} from './usersComponent/users.component';

import {AppRoutingModule} from './app-routing.module';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    HeroService,
    UserService
  ],
})

export class AppModule {
}

