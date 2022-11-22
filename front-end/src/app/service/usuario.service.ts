import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService<Usuario>{

  constructor(http: HttpClient) {
    super(http, "usuario")
  }

  login(nome: String, senha: String): Observable<Usuario>{
    return this.http.get<Usuario>(`${this._url_}/${this.url}/${nome}/${senha}`)
  }

  recuperarSenha(usuario: Usuario){
    console.log("recuperar senha:")
    console.log(usuario)
    return true
  }
}
