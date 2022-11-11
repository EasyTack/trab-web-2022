import { Injectable } from '@angular/core';
import { Configuracao } from '../model/Configuracao';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoService {

  constructor() { }

  salvar(configuracao: Configuracao):Boolean {
    console.log(configuracao)
    return true
  }
}
