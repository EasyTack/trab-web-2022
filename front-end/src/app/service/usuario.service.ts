import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  login(usuario: Usuario): Boolean{
    console.log("login:")
    console.log(usuario)
    return true
  }

  recuperarSenha(usuario: Usuario){
    console.log("recuperar senha:")
    console.log(usuario)
    return true
  }

  cadastrar(usuario: Usuario){
    console.log("cadastrar novo usuário:")
    console.log(usuario)
    return true
  }

  atualizar(usuario: Usuario){ }

  deletar(usuario: Usuario){ }
}
