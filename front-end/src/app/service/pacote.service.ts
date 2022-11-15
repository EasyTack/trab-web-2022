import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataPackage } from '../dados/dataPackage';
import { Pacote } from '../model/Pacote';
import { map } from 'rxjs/operators';

/*interface custonTable {
  pacote: Pacote,
  select: Boolean
}*/

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

  getTodos(): Observable<Pacote[]>{
    return this.http.get<Pacote[]>('http://localhost:3001/angular/pacote/getTodos').pipe(map((pacotes: Pacote[]) => {
      return pacotes.map((pacote: Pacote) => {
        if(pacote.dataEntrega) pacote.dataEntrega = new Date(pacote.dataEntrega)
        if(pacote.dataPostagem) pacote.dataPostagem = new Date(pacote.dataPostagem)
        return pacote
      })  
    }))
  }

  /*getDadosParaTabela(): Observable<custonTable[]>{
    return this.http.get<Pacote[]>('http://localhost:3001/angular/pacote/getTodos').pipe(map((pacotes: Pacote[]) => {
      return pacotes.map((pacote: Pacote) => {
        if(pacote.dataEntrega) pacote.dataEntrega = new Date(pacote.dataEntrega)
        if(pacote.dataPostagem) pacote.dataPostagem = new Date(pacote.dataPostagem)
        let p: custonTable = {
          pacote: pacote,
          select: false
        }
        return p
      })  
    }))
  }*/
}
