import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hc:HttpClient) {
    
  }
  searchMovie(mn:string) {
    return this.hc.get(
      `https://www.omdbapi.com/?s=${mn}&apikey=4827adaa`
    );
  }
}
