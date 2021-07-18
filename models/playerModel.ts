export abstract class Player {
    protected _name: string;
    protected _power: number;
    protected _lifePercentage: number;
    constructor(name: string, power: number){
        this._name = name;
        this._power = power;
        this._lifePercentage = 100;
    }

    public getName() : string {
      return this._name;
    }

    public setName(name : string) {
      this._name = name;
    }

    public getPower() : number {
      return this._power;
    }

    public setPower(power : number) {
      this._power = power;
    }

    public getLifePercentage() : number {
      return this._lifePercentage;
    }

    public setLifePercentage(percentage : number) {
      this._lifePercentage = percentage;
    }
}


export class Ranger extends Player{
  constructor(name: string, power: number){
    super(name, power);
  }

  public decreaseLife(damage: number): number {
     this._lifePercentage -= damage; 
     return this._lifePercentage;
  } 

  public fight(): number{
    return Math.round(Math.random() * 10);
  }
}