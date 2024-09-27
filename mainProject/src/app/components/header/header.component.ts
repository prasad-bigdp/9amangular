import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  count = 0;
  constructor(private api:ApiService) {
   this.api.countObs.subscribe((v)=>this.count=v)
  }
  ngOnChanges()
  {
    
  }
}
