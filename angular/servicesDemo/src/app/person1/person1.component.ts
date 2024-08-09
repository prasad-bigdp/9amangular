import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-person1',
  templateUrl: './person1.component.html',
  styleUrl: './person1.component.css'
})
export class Person1Component {
  constructor(public abc: MediatorService)
  {

  }
  fun1()
  {
    this.abc.message = "Good night"
    this.abc.display()
  }

}
