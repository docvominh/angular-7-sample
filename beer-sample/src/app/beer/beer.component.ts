import {Component, OnInit} from '@angular/core';

import {Beer} from "./beer";
import {BeerService} from "./beer.service";

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  beer: Beer;
  beers: Beer[];

  constructor(
    private service: BeerService) {
  }

  ngOnInit() {
    this.beer = {
      id: 'dr',
      name: 'drunks'
    }
    this.service.getBeers(20).subscribe(response => {
      console.log(response);
    });
  }

}
