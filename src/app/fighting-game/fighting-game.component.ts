import { Component, OnInit } from '@angular/core';
import { Ranger } from 'models/playerModel';

@Component({
  selector: 'app-fighting-game',
  templateUrl: './fighting-game.component.html',
  styleUrls: ['./fighting-game.component.css']
})

export class FightingGameComponent implements OnInit {
  isGameStarted : boolean = false;
  ranger: Ranger[] = [
  new Ranger("Ranger 1", 0),
  new Ranger("Ranger 2", 0),
  ]
  constructor() { }

  ngOnInit(): void {
  }

  initRanger(type : number){
    if(type === 1){
      this.ranger[0].setPower(5);
    }else{
      this.ranger[1].setPower(2);
    }
  }

  timer = setTimeout(() => { }, 0);

  async fightRangers(){
    this.isGameStarted = true;
    this.timer = setTimeout(() => {
      this.isGameStarted = false;
    }, 3000);
    
    while(this.isGameStarted){
      this.ranger[0].fight();
      await delay(500);
      this.ranger[1].fight();
      await delay(500);
    }
    let winnerName = (this.ranger[0].getLifePercentage() > this.ranger[1].getLifePercentage()) ? this.ranger[0].getName() : this.ranger[1].getName();
    console.log(`Winner is ${winnerName}`);
  }

  gameOver(){
    this.isGameStarted = false;
    this.ranger[0].setLifePercentage(100);
    this.ranger[1].setLifePercentage(100);
    clearTimeout(this.timer);

  }
}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}