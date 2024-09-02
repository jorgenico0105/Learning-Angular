import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[]=['Spiderman','Thor','IronMan','Hulk','SheHulk','HawkEye']
  public deletedHero?:string
  deleteHero():void{
  this.deletedHero=this.heroNames.pop();
  }

}
