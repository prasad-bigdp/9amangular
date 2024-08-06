import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Input() name!: string;
  @Input() username!: string;
  count = 25;
  @Output() myClick = new EventEmitter()
  childFun()
  {
    
    this.myClick.emit("HEllo i'm from child")
    console.log()
  }
}
