import { Component, OnInit } from '@angular/core';
import { Ranger } from 'models/playerModel';

@Component({
  selector: 'app-fighting-game',
  templateUrl: './fighting-game.component.html',
  styleUrls: ['./fighting-game.component.css']
})

export class FightingGameComponent implements OnInit {
  isGameStarted : boolean = false;
  ranger1 = new Ranger("Ranger 1", 0);
  ranger2 = new Ranger("Ranger 2", 0);
  constructor() { }

  ngOnInit(): void {
  }

  initRanger(type : number){
    if(type === 1){
      this.ranger1.setPower(5);
    }else{
      this.ranger2.setPower(2);
    }
  }

  timer = setTimeout(() => { }, 0);

  async fightRangers(){
    this.isGameStarted = true;
    this.timer = setTimeout(() => {
      this.isGameStarted = false;
    }, 3000);
    
    while(this.isGameStarted){
      let result1 = this.ranger1.fight();
      console.log(`${this.ranger1.getName()} damage ${result1}`);
      this.ranger2.decreaseLife(result1);
      console.log(`${this.ranger2.getName()} life - ${this.ranger2.getLifePercentage()}`);
      await delay(500);
      
      let result2 = this.ranger2.fight();
      console.log(`${this.ranger2.getName()} damage ${result2}`);
      this.ranger1.decreaseLife(result2);
      console.log(`${this.ranger1.getName()} life - ${this.ranger1.getLifePercentage()}`);
      await delay(500);
    }
    let winnerName = (this.ranger1.getLifePercentage() > this.ranger2.getLifePercentage()) ? this.ranger1.getName() : this.ranger2.getName();
    console.log(`Winner is ${winnerName}`);
  }

  gameOver(){
    this.isGameStarted = false;
    this.ranger1.setLifePercentage(100);
    this.ranger2.setLifePercentage(100);
    clearTimeout(this.timer);

  }
}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}