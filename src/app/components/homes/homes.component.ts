import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  homes$;

  constructor() {
  }

  ngOnInit() {
    //  this.homes$ = this.dataService.getHomes$();
    this.homes$ = of([
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
    ]);
  }

}
