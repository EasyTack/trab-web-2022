import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etiqueta } from '../model/Etiqueta';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  constructor(private http: HttpClient) { }

  createTag(data: any){
    console.log(data)
  }

  getTodos(){
    return this.http.get<Etiqueta[]>('http://localhost:3001/angular/etiqueta/getTodos')
  }
}
