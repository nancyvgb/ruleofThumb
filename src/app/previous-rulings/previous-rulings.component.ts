import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-rulings',
  templateUrl: './previous-rulings.component.html',
  styleUrls: ['./previous-rulings.component.scss']
})
export class PreviousRulingsComponent implements OnInit {
  personalities: Array<any>

  constructor() { }

  ngOnInit(): void {
    let routesObject = require('../thumbs.json');
    this.personalities = routesObject;

  }
  getUrl(personality){
  return '../assets/' + personality.img
  }

}
