import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 0, name: 'Zero'},
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];

    const users = [
      {id: 0, username: 'ura123', email: 'ura123@mail.ru', firstName: 'Uriy', lastName: 'Bessmernity', password: '123'},
      {id: 11, username: 'sasha123', email: 'sasha123@mail.ru', firstName: 'Sasha', lastName: 'Belui', password: '123'},
      {id: 12, username: 'serega123', email: 'serega123@mail.ru', firstName: 'Serega', lastName: 'Kolobok', password: '123'},
    ];

    return {heroes, users};
  }
}
