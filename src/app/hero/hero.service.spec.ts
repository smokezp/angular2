import {Injectable, ReflectiveInjector} from '@angular/core';
import {async, fakeAsync, tick} from '@angular/core/testing';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {HeroService} from './hero.service';

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
      HeroService,
    ]);
    this.heroService = this.injector.get(HeroService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('getHeroes() should query current service url', () => {
    this.heroService.getHeroes();
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch(/api\/heroes$/, 'url invalid');
  });

  it('getHeroes() should return some heroes', fakeAsync(() => {
    let result: String[];
    this.heroService.getHeroes().then((heroes: String[]) => result = heroes);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({data: [HERO_ONE.name, HERO_TWO.name]}),
    })));
    tick();
    expect(result.length).toEqual(2, 'should contain given amount of heroes');
    expect(result[0]).toEqual(HERO_ONE.name, ' HERO_ONE should be the first hero');
    expect(result[1]).toEqual(HERO_TWO.name, ' HERO_TWO should be the second hero');
  }));

  it('getHeroes() while server is down', fakeAsync(() => {
    let result: String[];
    let catchedError: any;
    this.heroService.getHeroes()
      .then((heroes: String[]) => result = heroes)
      .catch((error: any) => catchedError = error);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      status: 404,
      statusText: 'URL not Found',
    })));
    tick();
    expect(result).toBeUndefined();
    expect(catchedError).toBeDefined();
  }));

  it('getHero() should return hero by id', fakeAsync(() => {
    let result: any;
    this.heroService.getHero(1)
      .then((heroes: String[]) => result = heroes);

    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: {data: [HERO_ONE, HERO_TWO]},
    })));
    tick();
    expect(result.name).toEqual(HERO_ONE.name, ' name HERO_ONE');
    expect(result.id).toEqual(HERO_ONE.id, ' id HERO_ONE');
  }));

  it('create() should add new hero and return heroes', fakeAsync(() => {
    let result: Object;
    this.heroService.create('newHero')
      .then((heroes: String[]) => result = heroes);

    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: {data: [HERO_ONE, HERO_TWO]},
    })));
    tick();
    expect(result[0]).toEqual(HERO_ONE, ' HERO_ONE should be the first hero');
    expect(result[1]).toEqual(HERO_TWO, ' HERO_TWO should be the second hero');
  }));

  it('create() while server is down', fakeAsync(() => {
    let result: String[];
    let catchedError: any;
    this.heroService.create()
      .then((heroes: String[]) => result = heroes)
      .catch((error: any) => catchedError = error);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      status: 404,
      statusText: 'URL not Found',
    })));
    tick();
    expect(result).toBeUndefined();
    expect(catchedError).toBeDefined();
  }));

  it('update() should update hero and return this hero', fakeAsync(() => {
    let result: any;
    const HERO_TWO_UPDATE = {
      id: 2,
      name: 'UpdateHero'
    };
    this.heroService.update(HERO_TWO_UPDATE)
      .then((heroes: String[]) => result = heroes);

    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: {data: [HERO_ONE, HERO_TWO]},
    })));
    tick();

    expect(result.name).toEqual(HERO_TWO_UPDATE.name, ' name HERO_TWO_UPDATE');
    expect(result.id).toEqual(HERO_TWO_UPDATE.id, ' id HERO_TWO_UPDATE');
  }));

  it('delete() should delete and return null', fakeAsync(() => {
    let result: String[];

    this.heroService.delete(1)
      .then((heroes: String[]) => result = heroes);

    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: {data: [HERO_ONE, HERO_TWO]},
    })));
    tick();
    expect(result).toEqual(null, ' return null');
  }));

});
