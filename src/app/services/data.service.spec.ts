import {TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DataService', () => {
  let dataService: DataService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

  });

  it('should return the list of homes', () => {
    // spy on and mock the httpClient
    httpClient = TestBed.get(HttpClient);
    const homesMock = [
      {
        title: 'home 1',
        image: 'assets/home.jpg',
        location: 'Boston'
      },
      {
        title: 'home 2',
        image: 'assets/home2.jpg',
        location: 'Chicago'
      },
      {
        title: 'home 2',
        image: 'assets/home3.jpg',
        location: 'Alabama'
      }
    ];

    spyOn(httpClient, 'get').and.returnValue(of(homesMock));
    // use service do get homes
    dataService = TestBed.get(DataService);
    const spy = jasmine.createSpy('spy');
    dataService.getHomes$().subscribe(spy);
    // verify that the service returned mocked data
    expect(spy).toHaveBeenCalledWith(homesMock);
    // verify that  the service called the proper endpint
    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');
  });
});
