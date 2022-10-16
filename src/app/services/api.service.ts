import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../interfaces/model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 
  }

  get(){
   return this.http.get<Model>('https://rickandmortyapi.com/api/character/?page=1')
  }
    get2(){
   return this.http.get<Model>('https://rickandmortyapi.com/api/character/?page=2')
    }
  
     get3(){
   return this.http.get<Model>('https://rickandmortyapi.com/api/character/?page=3')
  }

}
