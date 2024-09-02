import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string='ironMan';
  public age: number=45;

  get capitalizedName():string{//los getters se usan como propiedads
    return this.name.toUpperCase()
  }
  getHeroDes():string{//los metdoos son con llaves
    return `${this.name.toUpperCase()}-${this.age}`
  }
  changeName():void{
    this.name='Spiderman'
  }
  changeAge():void{
    this.age=23
  }
  resetForm():void{
    this.name='ironMan'
    this.age=45
  }
}
