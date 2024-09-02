import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";
import { CommonModule } from "@angular/common";



@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent,
    CommonModule
  ]
})
export class CounterModule{}
