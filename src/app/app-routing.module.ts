import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboardComponent/dashboard.component';
import {HeroesComponent} from './heroesComponent/heroes.component';
import {HeroDetailComponent} from './heroDetailComponent/hero-detail.component';
import {LoginComponent} from './loginComponent/login.component';
import {RegisterComponent} from './registerComponent/register.component';
import {UsersComponent} from './usersComponent/users.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users', component: UsersComponent},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
