import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLogin = false;
  isAdmin = true;
  isUser = false;
  isEmployee = false;
  role="user"
  change()
  {
    this.isLogin = this.isLogin ? false : true;
  }
}
