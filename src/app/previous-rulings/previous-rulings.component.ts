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

    let personalities = routesObject.map(
      list => ({
        name: list.name,
        img: list.img,
        thumbmsup: list.thumbmsup,
        thumbmsdown: list.thumbmsdown,
        percentageUp: (list.thumbmsup/(list.thumbmsup + list.thumbmsdown))*100,
        percentageDown: (list.thumbmsdown/(list.thumbmsup + list.thumbmsdown))*100
      })
    )
    let data = localStorage.getItem('personalities');
    this.personalities = data? JSON.parse(data): personalities;
  }
  getUrl(personality){
  return '../assets/' + personality.img
  }
 

}
