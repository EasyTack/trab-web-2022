import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracao } from '../model/configuracao.model';
import { GenericService } from './generic.service';
import { RegistroMovimentacao } from '../model/registroMovimentacao.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroMovimentacaoService extends GenericService<Configuracao> {
  
  constructor(http: HttpClient) {
    super(http, "registroMovimentacao")
  }

  getPorIdPacote(idPacote: String){
    return this.http.get<RegistroMovimentacao[]>(`${this._url_}/${this.url}/porIdPacote?id=${idPacote}`)
  }
}
