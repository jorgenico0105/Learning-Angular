import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//referecnia a nuestro componente
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'Mi primera App de Angular';//
}
