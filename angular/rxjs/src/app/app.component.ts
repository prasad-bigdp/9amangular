import { Component } from '@angular/core';
import { Observable } from 'rxjs';
    import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjs';
  myObservable = new Observable(sub => {
    sub.next("hello");
    sub.next("world");
    setTimeout(() => {
      
      sub.next("by bye");
      sub.complete()
  },2000)
   
    
   })
  getData()
  {
    this.myObservable.subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('complted');
      },
    });

    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });
    subject.next(25)
    subject.next(1);
    subject.next(2);

    // Logs:
    // observerA: 1
    // observerB: 1
    // observerA: 2
    // observerB: 2
  }
}
