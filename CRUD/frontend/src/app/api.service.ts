import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hc: HttpClient) { }
  getData()
  {
    return this.hc.get('http://localhost:3000/movies');
  }
  deleteData(id: any) {
    return this.hc.delete(`http://localhost:3000/movies/${id}`);
  }
  createData(data:any)
  {
    return this.hc.post('http://localhost:3000/movies',data);
  }
  updateData(id: any, data: any)
  {
    return this.hc.put(`http://localhost:3000/movies/${id}`,data);
  }
}
