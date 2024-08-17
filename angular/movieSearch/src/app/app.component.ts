import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movieName = '';
  movies:any =[]
  constructor(private api: ApiService) { }
  search()
  {
    this.api.searchMovie(this.movieName).subscribe((data:any)=>this.movies=data.Search)
  }
}
