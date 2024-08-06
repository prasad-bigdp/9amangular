import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrl: './child-counter.component.css'
})
export class ChildCounterComponent {
  @Input() c!: number;
  c2 = 0;
  cIncr() {
    this.c2++;
  }
  cdecr() {
    this.c2--;
  }
  creset()
  {
    this.c2 = 0;
  }
}
