import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracao } from '../model/configuracao.model';
import { GenericService } from './generic.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoService extends GenericService<Configuracao> {
  
  constructor(http: HttpClient) {
    super(http, "configuracao")
  }

  getPorIdUsuario(idUsuario: String): Observable<Configuracao>{
    return this.http.get<Configuracao>(`${this._url_}/${this.url}/getPorIdUsuario/${idUsuario}`, { headers: this.cabecalho() })
  }
}
