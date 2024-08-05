import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  myName: string = ''
  inp:string=''
  myFun(e:any)
  {
    console.log(e)
   this.myName= this.inp
  }
  change(e: any)
  {
    console.log(e)
    this.inp=e.target.value
  }








  // name = 'prasad';
  // myLink =
  //   'https://www.shutterstock.com/image-photo/beautiful-pink-flower-anemones-fresh-260nw-1028135845.jpg';
  // isDisable = false;
  // fun()
  // {
  //   alert("i'm happy")
  // }
}
