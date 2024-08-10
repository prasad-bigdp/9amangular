import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-person2',
  templateUrl: './person2.component.html',
  styleUrl: './person2.component.css'
})
export class Person2Component {
  constructor(public o:MediatorService) {
    
  }
  
  fun2()
  {
    this.o.message = "Good bye";
    this.o.display()
  }
}
