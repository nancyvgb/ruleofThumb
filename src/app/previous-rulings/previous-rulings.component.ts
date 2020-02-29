import { Component, OnInit } from '@angular/core';
import * as personalitiesList from '../thumbs';

@Component({
  selector: 'app-previous-rulings',
  templateUrl: './previous-rulings.component.html',
  styleUrls: ['./previous-rulings.component.scss']
})
export class PreviousRulingsComponent implements OnInit {
  personalities: Array<any>

  constructor() { }
  voteNow = true;

  ngOnInit(): void {
  
    let personalities = personalitiesList.list.map(
      list => ({
        name: list.name,
        img: list.img,
        voteNow: list.voteNow,
        thumbmsup: list.thumbmsup,
        thumbmsdown: list.thumbmsdown,
        percentageUp: ((list.thumbmsup/(list.thumbmsup + list.thumbmsdown))*100).toFixed(1),
        percentageDown: ((list.thumbmsdown/(list.thumbmsup + list.thumbmsdown))*100).toFixed(1)
      })
    )
    let data = localStorage.getItem('personalities');
    this.personalities = data? JSON.parse(data): personalities;
  }
  getUrl(personality){
  return '../assets/' + personality.img
  }
  onClickVoteup(index){
    this.personalities[index].thumbmsup =  this.personalities[index].thumbmsup + 1;
    this.personalities[index].percentageUp =  (((this.personalities[index].thumbmsup/(this.personalities[index].thumbmsup + this.personalities[index].thumbmsdown))*100)).toFixed(1);
    this.personalities[index].percentageDown =  ((this.personalities[index].thumbmsdown/(this.personalities[index].thumbmsup + this.personalities[index].thumbmsdown))*100).toFixed(1);
    localStorage.setItem('personalities', JSON.stringify(this.personalities)); //set updated array to local storage
  }

  onClickVotedown(index) {
    this.personalities[index].thumbmsdown =  this.personalities[index].thumbmsdown + 1;
    this.personalities[index].percentageUp =  ((this.personalities[index].thumbmsup/(this.personalities[index].thumbmsup + this.personalities[index].thumbmsdown))*100).toFixed(1);
    this.personalities[index].percentageDown =  ((this.personalities[index].thumbmsdown/(this.personalities[index].thumbmsup + this.personalities[index].thumbmsdown))*100).toFixed(1);
    localStorage.setItem('personalities', JSON.stringify(this.personalities)); //set updated array to local storage
  }
  onClickVoteNow(index) {
    this.personalities[index].voteNow =  false
  }
  onClickVoteAgain(index) {
    this.personalities[index].voteNow =  true
  }
}
