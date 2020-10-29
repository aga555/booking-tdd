import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesComponent } from './homes.component';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show homes', () => {
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
