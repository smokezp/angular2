import {ReflectiveInjector} from '@angular/core';
import {fakeAsync} from '@angular/core/testing';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {HeroSearchService} from './hero-search.service';

const HERO_ONE = {
  id: 1,
  name: 'HeroNrOne'
};

const HERO_TWO = {
  id: 2,
  name: 'WillBeAlwaysTheSecond'
};

describe('MockBackend HeroService Example', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      HeroSearchService,
    ]);
    this.heroService = this.injector.get(HeroSearchService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('search() should return some heroes', fakeAsync(() => {
    this.heroService.search('HeroNrOne').subscribe((heroes: String[]) => {
      expect(heroes.length).toBe(2);
      expect(heroes[0]).toEqual('HeroNrOne');
      expect(heroes[1]).toEqual('WillBeAlwaysTheSecond');
    });

    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({data: [HERO_ONE.name, HERO_TWO.name]}),
    })));

  }));
});
