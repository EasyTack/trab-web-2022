import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataTag } from '../dados/dataTag';
import { Etiqueta } from '../model/Etiqueta';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  constructor(private http: HttpClient) { }

  createTag(data: any){
    console.log(data)
  }

  /*getAllTags(): Etiqueta[]{
    return new dataTag().get()
  }*/

  getTodos(){
    return this.http.get<Etiqueta[]>('http://localhost:3001/angular/etiqueta/getTodos')
  }
}
