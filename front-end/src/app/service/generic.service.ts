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
    return this.http.post<T>(`${this._url_}/${this.url}/salvar`, t)
  }

  atualizar(t: T){
    return this.http.put<T>(`${this._url_}/${this.url}/atualizar`, t)
  }

  deletar(id: String){
    return this.http.delete<String>(`${this._url_}/${this.url}/deletar/${id}`)
  }

  getId(id: String): Observable<T>{
    return this.http.get<T>(`${this._url_}/${this.url}/${id}`)
  }

  getTodos(): Observable<T[]>{
    return this.http.get<T[]>(`${this._url_}/${this.url}/getTodos`)
  }
}