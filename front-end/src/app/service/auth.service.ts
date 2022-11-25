import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model';
import { Auth } from '../interfaces/auth';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends GenericService<Usuario>{

  constructor(http: HttpClient) {
    super(http, "auth")
  }

  login(nome: String, senha: String){
    return this.http.get<Auth>(`${this._url_}/${this.url}/${nome}/${senha}`)
  }

  recuperarSenha(usuario: Usuario){
    console.log("recuperar senha:")
    console.log(usuario)
    return true
  }
}
