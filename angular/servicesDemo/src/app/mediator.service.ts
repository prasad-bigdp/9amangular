import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {
   message=''
  constructor() { }

  display()
  {
    alert(this.message)
  }
}
