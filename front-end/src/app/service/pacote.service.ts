import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataPackage } from '../dados/dataPackage';
import { Pacote } from '../model/Pacote';

@Injectable({
  providedIn: 'root'
})
export class PacoteService {

  constructor(private http: HttpClient) {}

  createPackage(data: any){
    console.log(data)
  }

  getTodosLista(): Pacote[]{
    return new dataPackage().get()
  }

  getTodos(){
    return this.http.get<Pacote[]>('http://localhost:3001/angular/pacote/getTodos')
  }
}
