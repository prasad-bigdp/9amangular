import { Component, ViewChild } from '@angular/core';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'input';
  @ViewChild(MovieComponent) mc!: MovieComponent;
  un = '';
  x = '';
  parentFun(e: any) {
    console.log(e);
    this.x = e;
  }
  myView()
  {
        console.log(this.mc.count);

  }
}
