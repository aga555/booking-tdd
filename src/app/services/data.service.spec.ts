import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DataService', () => {

  let dataService: DataService;
  let httpClient: HttpClient;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {

    dataService = TestBed.get(DataService);
    httpClient = TestBed.get(HttpClient);

  });

  it('should call API endpoind and return result', fakeAsync(() => {

    const spy = jasmine.createSpy('spy');

    const homes = require('../../assets/homes.json');

    spyOn(httpClient, 'get').and.returnValue(of(homes));

    dataService.getHomes$().subscribe(spy);

    tick();

    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');
    expect(spy).toHaveBeenCalledWith(homes);

  }));
});
