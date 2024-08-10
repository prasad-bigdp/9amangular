import { Component, ViewChild,DoCheck } from '@angular/core';
import { ChildCounterComponent } from './child-counter/child-counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{
  Pcount = 0;
  pc2 = 0;
  @ViewChild(ChildCounterComponent) cc!: ChildCounterComponent;
  pincr() {
    this.Pcount++;
  }
  pdecr() {
    this.Pcount--;
  }
  preset() {
    this.Pcount = 0;
  }

}
