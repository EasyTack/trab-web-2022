import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  login(): boolean{
    return false
  }

  criar(usuario: Usuario){ }

  atualizar(usuario: Usuario){ }

  deletar(usuario: Usuario){ }
}
