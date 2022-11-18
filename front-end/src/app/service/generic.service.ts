import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericService<T> {

  _url_ = "http://localhost:3001/angular"

  constructor(protected http: HttpClient, protected url: String) {}

  salvar(t: T){
    console.log(t)
    return this.http.post<T>(`${this._url_}/${this.url}/salvar`, t)
  }

  atualizar(t: T){
    console.log(t)
    return this.http.put<T>(`${this._url_}/${this.url}`, t)
  }

  deletar(id: String){
    return this.http.delete<String>(`${this._url_}/${this.url}/${id}`)
  }

  getId(id: String){
    return this.http.get<T>(`${this._url_}/${this.url}/id=${id}`)
  }

  getTodos(): Observable<T[]>{
    return this.http.get<T[]>(`${this._url_}/${this.url}/getTodos`)
  }
}
