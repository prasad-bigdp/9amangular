import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // username = ''; un='';
  // change()
  // {
  //   this.un = this.username;
  //   this.username=''
  // }
  name = '';
  rollno = '';
  url = '';
  name1 = '';
  rollno1 = '';
  url1 = '';
  change() {
    this.name1 = this.name;
    this.rollno1 = this.rollno;
    this.url1 = this.url;
  }
}
