import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  task = '';
  tasks:any=[]
  // details = [
  //   {
  //     name: 'SHINCHAN',
  //     url: 'https://rukminim2.flixcart.com/image/850/1000/l1mh7rk0/poster/0/d/h/medium-shinchan-cartoon-wall-poster-decorative-poster-for-original-imagd5f6m5zwvhhy.jpeg?q=90&crop=false',
  //   },
  //   {
  //     name: 'DOREMON',
  //     url: 'https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg',
  //   },
  //   {
  //     name: 'POPEYE',
  //     url: 'https://upload.wikimedia.org/wikipedia/en/0/00/Popeye_the_Sailor.png',
  //   },
  //   {
  //     name: 'CHOTA BHEEM',
  //     url: 'https://i.pinimg.com/474x/b3/be/65/b3be650a7e162b12eab155ab0839ee06.jpg',
  //   },
  // ];
  // track(name:any,url:any)
  // {
  //   return name
  // }
  isRed = false
  make()
  {
    this.isRed = this.isRed ? false : true;
  }
  submit()
  {
    this.tasks.push(this.task);
    this.task=''
  }
  remove(i:number)
  {
    this.tasks.splice(i,1)
  }
}
