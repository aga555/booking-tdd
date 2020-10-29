import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomesComponent} from './homes.component';
import {DataService} from '../../services/data.service';
import {spyOnClass} from 'jasmine-es6-spies/dist';
import {of} from 'rxjs';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomesComponent],
      providers: [{
        provide: DataService, useFactory: () => spyOnClass(DataService)
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;

  });
  beforeEach(() => {
    dataService = TestBed.get(DataService);
    dataService.getHomes$.and.returnValue(of(
      [
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
      ]
    ));
  });

  it('should show homes', () => {

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);
  });

  it('should show homes info', () => {
    expect(fixture.nativeElement.querySelector('[data-test="title"]').innerText).toEqual('home 1');
  });
  it('should show homes location', () => {
    expect(fixture.nativeElement.querySelector('[data-test="location"]').innerText).toEqual('Boston');
  });
  /*  it('should show homes location 2', () => {
      expect(fixture.nativeElement.querySelector('[data-test="location"]').innerText).toEqual('Chicago');
    });*/
  it('should show homes image', () => {
    expect(fixture.nativeElement.querySelector('[data-test="image"]')).toBeTruthy();
  });
});
