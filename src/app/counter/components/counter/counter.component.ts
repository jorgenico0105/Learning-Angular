import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter {{ counter }}</h3>
  <button (click)="increaby(+1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaby(-1)">-1</button>
  `
})

export class CounterComponent  {
  public counter:number=10
  // public counter (value:number){ this.counter+=value} dependiendo de lo que pase en mi funcion me suma o me resta
  public increaby(value:number):void{
    this.counter+=value
    if(this.counter<0){
      this.counter=0
    }
  }
  public reset():void{
    this.counter=10
  }
}
