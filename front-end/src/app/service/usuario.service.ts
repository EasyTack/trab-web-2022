import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  criar(usuario: Usuario){ }

  atualizar(usuario: Usuario){ }

  deletar(usuario: Usuario){ }
}
