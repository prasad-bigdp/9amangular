import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrl: './receipes.component.css'
})
export class ReceipesComponent {
  myreceipes:any=[]
  constructor(private a: ApiService) {
    this.a.getData().subscribe((data:any) => {
      console.log(data); 
      this.myreceipes = data.recipes;
    })

  }

}
