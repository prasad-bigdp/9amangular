import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isUpdate=false
  movies: any = []
  name = '';
  url = '';
  obj = {}
  mid=''
  constructor(private api:ApiService) {
    this.api.getData().subscribe(
      (data: any) => this.movies = data)
  }
  remove(id:any)
  {
    this.api.deleteData(id).subscribe((data) => {
      console.log(data);
      window.location.reload()
    })
  }
  add()
  {
    this.obj= {
      "name": this.name,
      "URL": this.url,
      "id": Math.round(Math.random() * 1000).toString()
    }
    this.api.createData(this.obj).subscribe((data) => {
      console.log(data);
      window.location.reload()
    })
  }
  update(id: any) {
    console.log(id);
    this.isUpdate = true;
    this.mid = id;
  }
  update2()
  {
    let obj = {
      "id": this.mid,
      "name": this.name,
      "URL":this.url
    }
    this.api.updateData(this.mid, obj).subscribe((data) => {
      console.log(data);
      window.location.reload()
      this.isUpdate=false
    })
  }
  
}
